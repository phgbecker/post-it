import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Post-it app', () => {
  render(<App />);
  const linkElement = screen.getByText(/Post-it/i);
  expect(linkElement).toBeInTheDocument();
});
