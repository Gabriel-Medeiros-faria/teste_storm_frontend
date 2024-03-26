import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { render, fireEvent, waitFor } from '@testing-library/react';
import ImageCarousel from '../components/home/imageCarousel';

describe('ImageCarousel', () => {
    it('should render the carousel and carousel items correctly', async () => {
      const movies = [
        { id: 1, imagePoster: 'image1.jpg', title: 'Movie 1', description: 'Description 1' },
        { id: 2, imagePoster: 'image2.jpg', title: 'Movie 2', description: 'Description 2' },
        { id: 3, imagePoster: 'image3.jpg', title: 'Movie 3', description: 'Description 3' },
        { id: 4, imagePoster: 'image4.jpg', title: 'Movie 4', description: 'Description 4' }
      ];
  
      const { getAllByAltText, queryAllByText, getAllByText  } = render(<Router><ImageCarousel movies={movies} /></Router>);
  
      // Verifica se o carrossel está renderizado
       const carouselItems = queryAllByText(/Movie \d/);
      expect(carouselItems.length).toBeGreaterThan(0);
  
      // Verifica se os itens do carrossel estão renderizados corretamente
      movies.forEach(movie => {
        const movieImage = getAllByAltText(`Image ${movie.id}`);
        expect(movieImage.length).toBeGreaterThan(0);
  
        const movieTitle = getAllByText(movie.title);
        expect(movieTitle.length).toBeGreaterThan(0);
  
        const movieDescription = getAllByText(movie.description);
        expect(movieDescription.length).toBeGreaterThan(0);
      });
    });
  });