import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './RenderWithRouter';
import App from '../App';
// import Pokedex from '../components/Pokedex';

describe('Testando o componente Pokedex', () => {
  it('Teste se página contém um heading h2 com o texto Encountered pokémons', () => {
    renderWithRouter(<App />);
    const title = screen.getByRole('heading',
      { name: /Encountered pokémons/i, level: 2 });
    expect(title).toBeInTheDocument();
  });
  it('Exibir o próximo Pokémon da lista quando o botão Próximo pokémon é clicado', () => {
    renderWithRouter(<App />);
    const button = screen.getByRole('button', { name: /Próximo pokémon/i });
    userEvent.click(button);
    expect(button).toBeInTheDocument();
  });
  it('Teste se é mostrado apenas um Pokémon por vez', () => {
    renderWithRouter(<App />);
    const showPokemon = screen.getByTestId('pokemon-name');
    expect(showPokemon).toBeInTheDocument();
  });
  it('Teste se a Pokédex tem os botões de filtro', () => {
    renderWithRouter(<App />);
    const numberSeven = 7;
    const filterBtn = screen.getAllByTestId('pokemon-type-button');
    const pokemonFilter = screen.getByRole('button', { name: 'Electric' });
    expect(filterBtn).toHaveLength(numberSeven);
    expect(pokemonFilter).toBeInTheDocument();
  });
  it('Teste se a Pokédex contém um botão para resetar o filtro', () => {
    renderWithRouter(<App />);
    const resetBtn = screen.getByRole('button', { name: 'All' });
    userEvent.click(resetBtn);
    expect(resetBtn).toBeInTheDocument();
  });
});
