import { render, screen } from '@testing-library/react';
import React from 'react';
import MainApp from './App';
// import App from './App';


it('renders learn react link', () => {
    // const div = document.createElement('div');
    // React
  render(<MainApp />);
    const linkElement = screen.getByRole(/main/i);
  expect(linkElement).toBeInTheDocument();
});
