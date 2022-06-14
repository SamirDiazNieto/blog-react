import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ModalEditarArticulo from './ModalEditarArticulo';

describe('<ModalEditarArticulo />', () => {
  test('it should mount', () => {
    render(<ModalEditarArticulo />);
    
    const modalEditarArticulo = screen.getByTestId('ModalEditarArticulo');

    expect(modalEditarArticulo).toBeInTheDocument();
  });
});