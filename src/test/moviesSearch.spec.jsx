import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import MoviesSearch from '../components/movieSearch/moviesSearch';
import { BrowserRouter as Router } from "react-router-dom";
describe('MoviesSearch', () => {
  const movies = [
    {
      id: 1,
      title: 'Movie Title 1',
      imagePoster: 'poster1.jpg',
    },
    {
      id: 2,
      title: 'Movie Title 2',
      imagePoster: 'poster2.jpg',
    },
  ];

  it('renders movies correctly', async () => {
    render(<Router><MoviesSearch movies={movies} /></Router>);

    // Check if movie titles are rendered
    expect(screen.getByText('Movie Title 1')).toBeInTheDocument();
    expect(screen.getByText('Movie Title 2')).toBeInTheDocument();

    // Click on the first movie
    fireEvent.click(screen.getByText('Movie Title 1'));

    // Verifica se o título "Filmes Econtrados!" está presente
    expect(screen.getByText('Filmes Econtrados!')).toBeInTheDocument();
  });
});