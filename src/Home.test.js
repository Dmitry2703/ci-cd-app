import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders main page text', () => {
  render(<Home />);
  const textElement = screen.getByText(/Test project for CI\/CD learning/i);
  expect(textElement).toBeInTheDocument();
});
