import { render, screen } from '@testing-library/react';
import App from './App';

test('renders LinkedIn clone', () => {
  render(<App />);
  const homeElement = screen.getByText(/Home/i);
  expect(homeElement).toBeInTheDocument();
});

test('renders profile section', () => {
  render(<App />);
  const profileElement = screen.getByText(/Karim Deraz/i);
  expect(profileElement).toBeInTheDocument();
});

test('renders navigation', () => {
  render(<App />);
  const networkElement = screen.getByText(/My Network/i);
  expect(networkElement).toBeInTheDocument();
});