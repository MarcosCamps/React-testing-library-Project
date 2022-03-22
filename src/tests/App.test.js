import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './RenderWithRouter';
import App from '../App';

describe('Teste se o topo da aplicação contém um conjunto fixo de links de navegação',
  () => {
    it('O primeiro link deve possuir o texto Home', () => {
      const { history } = renderWithRouter(<App />);
      history.push('/home/');
      const firstLink = screen.getByText('Home', { name: /Home/i });
      expect(firstLink).toBeInTheDocument();
      userEvent.click(firstLink);
    });
    it('O segundo link deve possuir o texto About', () => {
      const { history } = renderWithRouter(<App />);
      history.push('/about/');
      const secondLink = screen.getByText('About', { name: /About/i });
      expect(secondLink).toBeInTheDocument();
      userEvent.click(secondLink);
    });
    it('O terceiro link deve possuir o texto Favorite Pokémons', () => {
      const { history } = renderWithRouter(<App />);
      history.push('/favorites/');
      const thirdLink = screen.getByText('Favorite Pokémons',
        { name: /Favorite Pokémons/i });
      expect(thirdLink).toBeInTheDocument();
      userEvent.click(thirdLink);
    });
  });
