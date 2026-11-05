import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import App from '../App';

describe('App Component', () => {
  it('renders the main heading or content correctly', () => {
    render(<App />);
    
    // Replace 'Arclight' or whatever text your App component outputs by default
    const headingElement = screen.getAllByText(/Rotating Roads/i);
    assert(headingElement.length > 0, 'Expected to find at least one element with text "Rotating Roads"');
    
  });
});