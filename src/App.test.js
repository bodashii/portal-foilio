import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio', () => {
  render(<App />);
  const linkElement = screen.getByText(/Nicolas Young !/i);
  expect(linkElement).toBeInTheDocument();
});
