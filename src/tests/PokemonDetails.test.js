import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './RenderWithRouter';
import App from '../App';

describe('Testando o Pokemon Details', () => {
  it('Teste se as informações detalhadas do Pokémon selecionado são mostradas na tela',
    () => {
      renderWithRouter(<App />);
      const getLink = screen.getByRole('link', { name: /More details/i });
      userEvent.click(getLink);
      expect(getLink).not.toBeInTheDocument();
      const getNameDetail = screen.getByRole('heading',
        { name: /Pikachu details/i, level: 2 });
      expect(getNameDetail).toBeInTheDocument();
      const getSummary = screen.getByRole('heading', { name: /Summary/i, level: 2 });
      expect(getSummary).toBeInTheDocument();
      const getP = screen.getByText(/This intelligent Pokémon/i);
      expect(getP).toBeInTheDocument();
    });
  it('Se existe na página uma seção com os mapas contendo as localizações', () => {
    renderWithRouter(<App />);
    const getLink = screen.getByRole('link', { name: /More details/i });
    userEvent.click(getLink);
    const getLocationHeading = screen.getByRole('heading',
      { name: /Game Locations of Pikachu/i, level: 2 });
    expect(getLocationHeading).toBeInTheDocument();
    const getLocation = screen.getAllByAltText(/pikachu location/i);
    expect(getLocation[0].src).toContain('https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    expect(getLocation[0]).toHaveAttribute('alt', 'Pikachu location');
    expect(getLocation[1].src).toContain('https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
    expect(getLocation[1]).toHaveAttribute('alt', 'Pikachu location');
  });
  it('Teste se o usuário pode favoritar um pokémon através da página de detalhes', () => {
    renderWithRouter(<App />);
    const getLink = screen.getByRole('link', { name: /More details/i });
    userEvent.click(getLink);
    const favoritePokemon = screen.getByRole('checkbox');
    userEvent.click(favoritePokemon);
    const labelCheckbox = screen.getByLabelText('Pokémon favoritado?');
    expect(labelCheckbox).toBeInTheDocument();
  });
});
