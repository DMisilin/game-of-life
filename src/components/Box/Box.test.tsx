import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Box from './Box';
import { renderWithProviders } from '../../RTK/test-utils';
import reducer from '../../RTK/gameSlice';

describe('Box element', () => {
  test('To be in document', () => {
    renderWithProviders(
      <Box isLife={false} x={1} y={1} />
    );

    expect(screen.getByRole('BoxRole')).toBeInTheDocument();
  });

  test('Click', () => {
    const x = Math.round(Math.random() * 10);
    const y = Math.round(Math.random() * 10);
    const scope = renderWithProviders(
      <Box isLife={false} x={x} y={y} />
    );

    const contentBefore = scope.store.getState().game.boxesMatrix;
    expect(contentBefore[x][y]).toBe(0);

    const box = screen.getByRole('BoxRole');
    fireEvent.click(box);

    const contentAfter = scope.store.getState().game.boxesMatrix;
    expect(contentAfter[x][y]).toBe(1);
  });
});
