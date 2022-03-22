import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './RenderWithRouter';
import FavoritePokemons from '../components/FavoritePokemons';
import App from '../App';

describe('Teste se a pessoa não tem pokemons favoritos', () => {
  it('Exibir No favorite pokemon found, se a pessoa não tiver pokémons favoritos', () => {
    renderWithRouter(<FavoritePokemons />);
    const text = screen.getByText('No favorite pokemon found');
    expect(text).toBeInTheDocument();
  });
  it('Teste se é exibido todos os cards de pokémons favoritados', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/favorites/');
    const haveFavorite = screen.getByRole('heading',
      { name: /Favorite pokémons/i, level: 2 });
    expect(haveFavorite).toBeInTheDocument();
    userEvent.click(haveFavorite);
  });
});
