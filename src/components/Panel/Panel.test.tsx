import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { renderWithProviders } from '../../RTK/test-utils';
import Panel from './Panel';

describe('Button element', () => {
  test('To be in document, with some text', () => {
    renderWithProviders(<Panel />);
    expect(screen.getByRole('PanelRole')).toBeInTheDocument();
  });

  test('Check panel buttons', () => {
    renderWithProviders(<Panel />);

    expect(screen.getByText('Next')).toBeInTheDocument();
    expect(screen.getByText('Run')).toBeInTheDocument();
    expect(screen.getByText('Stop')).toBeInTheDocument();
    expect(screen.getByText('Clear')).toBeInTheDocument();
    expect(screen.getByText('Random')).toBeInTheDocument();
    expect(screen.getByText('15x15')).toBeInTheDocument();
    expect(screen.getByText('20x20')).toBeInTheDocument();
    expect(screen.getByText('25x25')).toBeInTheDocument();
  });

  test('Click button "Random"', () => {
    const scope = renderWithProviders(<Panel />);
    const contentBefore = scope.store.getState().game.boxesMatrix;

    const button = screen.getByText('Random');
    fireEvent.click(button);
    
    const contentAfter = scope.store.getState().game.boxesMatrix;

    expect(contentAfter).not.toEqual(contentBefore);
  });

  test('Click button "Next"', () => {
    const scope = renderWithProviders(<Panel />);

    const randomButton = screen.getByText('Random');
    fireEvent.click(randomButton);
    const contentBefore = scope.store.getState().game.boxesMatrix;

    const nextButton = screen.getByText('Next');
    fireEvent.click(nextButton);
    const contentAfter = scope.store.getState().game.boxesMatrix;

    expect(contentAfter).not.toEqual(contentBefore);
  });

  test('Click button "Clear"', () => {
    const scope = renderWithProviders(<Panel />);

    const randomButton = screen.getByText('Random');
    fireEvent.click(randomButton);
    const contentBefore = scope.store.getState().game.boxesMatrix;
    const lifeBoxesBefore = contentBefore.reduce((acc, elm) => {
      const life = elm.filter(elm => elm > 0);
      return acc + life.length;
    }, 0);

    expect(lifeBoxesBefore).toBeGreaterThan(0);

    const nextButton = screen.getByText('Clear');
    fireEvent.click(nextButton);
    const contentAfter = scope.store.getState().game.boxesMatrix;
    const lifeBoxesAfter = contentAfter.reduce((acc, elm) => {
      const life = elm.filter(elm => elm > 0);
      return acc + life.length;
    }, 0);

    expect(contentAfter).not.toEqual(contentBefore);
    expect(lifeBoxesAfter).toEqual(0);
  });

  test('Click button "Run"', () => {
    const scope = renderWithProviders(<Panel />);
    jest.useFakeTimers();

    const randomButton = screen.getByText('Random');
    fireEvent.click(randomButton);
    const contentBefore = scope.store.getState().game.boxesMatrix;

    const runButton = screen.getByText('Run');
    fireEvent.click(runButton);

    jest.advanceTimersByTime(1000);

    const stopButton = screen.getByText('Stop');
    fireEvent.click(stopButton);

    jest.clearAllTimers();

    const contentAfter = scope.store.getState().game.boxesMatrix;
    expect(contentAfter).not.toMatchObject(contentBefore);
  });

  test('Click button "15x15"', () => {
    const scope = renderWithProviders(<Panel />);

    const { width: widthBefore, height: heightBefore } = scope.store.getState().game;
    expect(widthBefore).toBe(20);
    expect(heightBefore).toBe(20);

    fireEvent.click(screen.getByText('15x15'));
    const { width: widthAfter, height: heightAfter } = scope.store.getState().game;

    expect(widthAfter).not.toEqual(widthBefore);
    expect(heightAfter).not.toEqual(heightBefore);
    expect(widthAfter).toBe(15);
    expect(heightAfter).toBe(15);
  });

  test('Click button "20x20"', () => {
    const scope = renderWithProviders(<Panel />);

    fireEvent.click(screen.getByText('15x15'));
    const { width: widthBefore, height: heightBefore } = scope.store.getState().game;
    expect(widthBefore).toBe(15);
    expect(heightBefore).toBe(15);

    fireEvent.click(screen.getByText('20x20'));
    const { width: widthAfter, height: heightAfter } = scope.store.getState().game;

    expect(widthAfter).not.toEqual(widthBefore);
    expect(heightAfter).not.toEqual(heightBefore);
    expect(widthAfter).toBe(20);
    expect(heightAfter).toBe(20);
  });

  test('Click button "25x25"', () => {
    const scope = renderWithProviders(<Panel />);

    const { width: widthBefore, height: heightBefore } = scope.store.getState().game;
    expect(widthBefore).toBe(20);
    expect(heightBefore).toBe(20);

    fireEvent.click(screen.getByText('25x25'));
    const { width: widthAfter, height: heightAfter } = scope.store.getState().game;

    expect(widthAfter).not.toEqual(widthBefore);
    expect(heightAfter).not.toEqual(heightBefore);
    expect(widthAfter).toBe(25);
    expect(heightAfter).toBe(25);
  });
});
