import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders Task Manager title', () => {
  render(<App />);
  const heading = screen.getByText(/task manager/i);
  expect(heading).toBeInTheDocument();
});
