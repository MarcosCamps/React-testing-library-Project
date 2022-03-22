import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './RenderWithRouter';
import NotFound from '../components/NotFound';

describe('Teste o componente Not Found', () => {
  it('Teste se página contém um heading h2 com o texto Page requested not found 😭',
    () => {
      renderWithRouter(<NotFound />);
      const notFoundTitle = screen.getByText(/page requested not/i);
      expect(notFoundTitle).toBeInTheDocument();
    });
  it('Teste se página mostra a imagem no Not Found', () => {
    renderWithRouter(<NotFound />);
    const image = screen.getByAltText(/Pikachu crying because/i);
    expect(image).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
