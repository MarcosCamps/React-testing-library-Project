import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './RenderWithRouter';
import App from '../App';

describe('Renderizar um card com as informações de determinado pokémon', () => {
  it('Teste se é renderizado um card com as informações de determinado pokémon', () => {
    renderWithRouter(<App />);
    const cardPokemon = screen.getByText('More details');
    const getName = screen.getByTestId('pokemon-name');
    const getType = screen.getByTestId('pokemon-type');
    const getWeight = screen.getByTestId('pokemon-weight');
    const imagePokemon = screen.getByRole('img');
    expect(imagePokemon.src).toContain('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
    expect(imagePokemon).toHaveAttribute('alt', 'Pikachu sprite');
    expect(cardPokemon).toBeInTheDocument();
    expect(getName).toHaveTextContent('Pikachu');
    expect(getType).toHaveTextContent('Electric');
    expect(getWeight).toHaveTextContent('Average weight: 6.0 kg');
  });
  it('Se o card do Pokémon indicado na Pokédex contém um link de navegação...', () => {
    renderWithRouter(<App />);
    const linkDetails = screen.getByRole('link', { name: /More details/i });
    expect(linkDetails).toHaveAttribute('href', '/pokemons/25');
  });
  it('Clicar no link de navegação do Pokémon, redirecionar...', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/pokemons/4');
    const clickDetail = screen.getByRole('heading',
      { name: /Game Locations of Charmander/i, level: 2 });
    userEvent.click(clickDetail);
    expect(clickDetail).toBeInTheDocument();
  });
  it('Teste também se a URL exibida no navegador muda para /pokemon/<id>', () => {
    const { history } = renderWithRouter(<App />);
    const url = '/pokemons/148';
    history.push(url);
    const { location: { pathname } } = history;
    expect(pathname).toBe(url);
  });
  it('Teste se existe um ícone de estrela nos Pokémons favoritados', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/pokemons/148');
    const checkbox = screen.getByRole('checkbox');
    userEvent.click(checkbox);
    const starIcon = screen.getByRole('img',
      { name: /Dragonair is marked as favorite/i });
    expect(starIcon).toHaveAttribute('src', '/star-icon.svg');
    expect(starIcon).toBeInTheDocument();
  });
});
