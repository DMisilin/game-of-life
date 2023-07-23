import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button from './Button';
import { renderWithProviders } from '../../RTK/test-utils';

describe('Button element', () => {
  test('To be in document, with some text', () => {
    const fn = jest.fn();
    const buttonText = 'Test text on button';

    renderWithProviders(
      <Button name="Test button" text={buttonText} click={fn} />
    );

    expect(screen.getByText(buttonText)).toBeInTheDocument();
  });

  test('Click button', () => {
    const onClick = jest.fn();
    const buttonText = 'Test text on button';

    renderWithProviders(
      <Button name="Test button" text={buttonText} click={onClick} />
    );

    const button = screen.getByText(buttonText);
    fireEvent.click(button)

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(screen.getByText(buttonText)).toBeInTheDocument();
  });
});
