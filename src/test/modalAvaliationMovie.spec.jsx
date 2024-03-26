import { render, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; // Certifique-se de importar o BrowserRouter com um alias para Router
import ModalAvaliationMovie from '../components/movie/modalAvaliationMovie';
import rateMovieApi from "../api/rateMovie-api"; // Importe a função rateMovieApi

// Mock da função rateMovieApi
jest.mock("../api/rateMovie-api");

describe('ModalAvaliationMovie', () => {
  it("deve renderizar corretamente e permitir avaliação", async () => {
    // Renderiza o componente
    const { getByText, getByRole } = render(
      <Router>
        <ModalAvaliationMovie movieId={1} />
      </Router>
    );

    // Verifica se o botão "Avaliar filme" está presente
    const avaliarButton = getByText("Avaliar filme");
    expect(avaliarButton).toBeInTheDocument();

    // Clica no botão para abrir o modal
    fireEvent.click(avaliarButton);

    // Verifica se o modal foi aberto
    const modal = getByRole("presentation"); // Verifica o modal pelo papel "presentation"
    expect(modal).toBeInTheDocument();

    // Simula a avaliação clicando na segunda estrela
    const starIcons = modal.querySelectorAll("span");
    expect(starIcons).toHaveLength(4); // Verifique o número de estrelas esperado

    // Simula o clique no botão "Avaliar"
    const avaliarModalButton = getByText("Avaliar");
    fireEvent.click(avaliarModalButton);
    
    // Verifica se a função rateMovieApi foi chamada com os argumentos corretos
    expect(rateMovieApi).toHaveBeenCalledWith(
        { userId: 1, movieId: 1, assessment: 2 },
        expect.any(Function), // Espera uma função para setErro
        expect.any(Function)  // Espera uma função para setPositiveRequest
      );

    // Verifica se a avaliação foi feita corretamente
    await waitFor(() => {
      expect(rateMovieApi).toHaveBeenCalledTimes(1); // Verifica se a função foi chamada apenas uma vez
      // Você pode expandir este teste para verificar se as mensagens são exibidas corretamente
      // dependendo do comportamento esperado após a avaliação.
    });
  });
});