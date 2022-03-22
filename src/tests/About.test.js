import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './RenderWithRouter';
import About from '../components/About';

describe('Teste as informações sobre a Pokédex', () => {
  it('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
    renderWithRouter(<About />);
    const heading = screen.getByRole('heading', { name: /About Pokédex/i, level: 2 });
    expect(heading).toBeInTheDocument();
  });
  it('Teste se a página contém dois parágrafos com texto sobre a Pokédex', () => {
    renderWithRouter(<About />);
    const findPOne = screen.getByText(/encyclopedia/i);
    const findPTwo = screen.getByText(/details/i);
    expect(findPOne).toBeInTheDocument();
    expect(findPTwo).toBeInTheDocument();
  });
  it('Teste se a página contém a seguinte imagem de uma Pokédex:', () => {
    renderWithRouter(<About />);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
