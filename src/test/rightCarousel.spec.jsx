import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import RightCarousel from '../components/home/rightCarousel';


jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(), // Mock useNavigate
  }));
describe('RightCarousel', () => {
  const movies = [
    { id: 1, imagePoster: 'image1.jpg', title: 'Movie 1', description: 'Description 1' },
    { id: 2, imagePoster: 'image2.jpg', title: 'Movie 2', description: 'Description 2' },
    { id: 3, imagePoster: 'image3.jpg', title: 'Movie 3', description: 'Description 3' },
  ];

  it('deve direcionar para a rota correta ao clicar em um filme', () => {
    const mockNavigate = jest.fn();
    require('react-router-dom').useNavigate.mockReturnValue(mockNavigate);

    const { getByTestId } = render(
      <Router>
        <RightCarousel movies={movies} />
      </Router>
    );

    const movieImage = getByTestId(`movie-image-${movies[0].id}`);
    fireEvent.click(movieImage);

    expect(mockNavigate).toHaveBeenCalledWith(`/movie/${movies[0].id}`);
  });

  it('deve renderizar corretamente o título e a descrição de cada filme', () => {
    const { getByText } = render(
      <Router>
        <RightCarousel movies={movies} />
      </Router>
    );

    movies.forEach((movie) => {
      const movieTitle = getByText(movie.title);
      const movieDescription = getByText(movie.description);
      
      expect(movieTitle).toBeInTheDocument();
      expect(movieDescription).toBeInTheDocument();
    });
  });
});
