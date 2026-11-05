import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import RotatingRoads from '../components/RotatingRoads';


describe('App', () => {

  it('renders Arclight when navigating to /arclight', async () => {
    render(
      <MemoryRouter initialEntries={['/arclight']}>
        <RotatingRoads />
      </MemoryRouter>,
    );
    expect(await screen.findByText('Arclight')).toBeTruthy();
  });

});
