import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from './Button';
import { renderWithProviders } from '../../RTK/test-utils';

describe('Button element', () => {
  test('To be in document, with some text', () => {
    const fn = jest.fn();
    renderWithProviders(
      <Button name="Test button" text="Test text on button" click={fn} />
    );

    expect(screen.getByText("Test text on button")).toBeInTheDocument();
  });

  test('Click button', () => {
    const onClick = jest.fn();
    renderWithProviders(
      <Button name="Test button" text="Test text on button" click={onClick} />
    );

    const button = screen.getByText("Test text on button");
    fireEvent.click(button)

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(screen.getByText("Test text on button")).toBeInTheDocument();
  });
});
