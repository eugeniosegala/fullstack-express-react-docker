import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('if header and text are present', () => {
  render(<App />);

  const sampleText = screen.getByText('Hello world!');
  const header = screen.getByTestId('app-header');

  // screen.debug();

  expect(sampleText).toBeInTheDocument();
  expect(header).toBeInTheDocument();
});

test('if the number is incrementing', () => {
  render(<App />);

  fireEvent.click(screen.getByText('Click me!'));

  const sampleText = screen.getByText('Result: 1');

  expect(sampleText).toBeInTheDocument();
});

