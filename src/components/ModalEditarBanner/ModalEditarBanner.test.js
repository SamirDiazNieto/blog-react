import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ModalEditarBanner from './ModalEditarBanner';

describe('<ModalEditarBanner />', () => {
  test('it should mount', () => {
    render(<ModalEditarBanner />);
    
    const modalEditarBanner = screen.getByTestId('ModalEditarBanner');

    expect(modalEditarBanner).toBeInTheDocument();
  });
});