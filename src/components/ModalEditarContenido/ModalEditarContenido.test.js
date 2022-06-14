import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ModalEditarContenido from './ModalEditarContenido';

describe('<ModalEditarContenido />', () => {
  test('it should mount', () => {
    render(<ModalEditarContenido />);
    
    const modalEditarContenido = screen.getByTestId('ModalEditarContenido');

    expect(modalEditarContenido).toBeInTheDocument();
  });
});