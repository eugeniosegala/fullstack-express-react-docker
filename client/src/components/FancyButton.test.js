import { render, screen, fireEvent } from '@testing-library/react';
import FancyButton from './FancyButton';

test('if button is invoking a callback when clicked', () => {
  const onClick = jest.fn();

  render(<FancyButton onClick={onClick} />);

  fireEvent.click(screen.getByText('Click me!'));

  expect(onClick).toHaveBeenCalledTimes(1);
});
