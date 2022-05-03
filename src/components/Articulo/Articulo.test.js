import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Articulo from './Articulo';

describe('<Articulo />', () => {
  test('it should mount', () => {
    render(<Articulo />);
    
    const articulo = screen.getByTestId('Articulo');

    expect(articulo).toBeInTheDocument();
  });
});