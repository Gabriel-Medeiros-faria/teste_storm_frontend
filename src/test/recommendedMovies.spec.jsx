import { render, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import RecommendedMovies from '../components/home/recommendedMovies';
import { createMemoryHistory } from 'history';

describe('RecommendedMovies', () => {
  const movies = [
    { id: 1, imagePoster: 'image1.jpg', title: 'Movie 1' },
    { id: 2, imagePoster: 'image2.jpg', title: 'Movie 2' },
    { id: 3, imagePoster: 'image3.jpg', title: 'Movie 3' },
  ];

  it('deve renderizar corretamente', () => {
    const { getByText, getAllByAltText, getAllByText } = render(
      <Router>
        <RecommendedMovies movies={movies} />
      </Router>
    );

    const title = getByText('Nossos Filmes Para Você!');
    expect(title).toBeInTheDocument();

    movies.forEach(movie => {
      const movieTitle = getAllByText(movie.title);
      expect(movieTitle.length).toBeGreaterThan(0);

      const movieImage = getAllByAltText(`Poster do filme ${movie.title}`);
      expect(movieImage.length).toBeGreaterThan(0);
    });
  });
});