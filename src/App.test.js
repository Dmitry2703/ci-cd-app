import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main page text', () => {
  render(<App />);
  const textElement = screen.getByText(/Test project for CI\/CD learning/i);
  expect(textElement).toBeInTheDocument();
});
