import { render, screen } from "@testing-library/react";
import MovieRegisterBox from "../components/movieRegister/movieRegisterBox";
import { BrowserRouter as Router } from "react-router-dom";

jest.mock("../api/movieRegister-api", () => jest.fn());

describe("MovieRegisterBox", () => {
  test("renderiza o componente corretamente", () => {
    render(
      <Router>
        <MovieRegisterBox />
      </Router>
    );
    // Verifica se o componente é renderizado corretamente
    expect(screen.getByLabelText("Título do filme*")).toBeInTheDocument();
    expect(screen.getByLabelText("Descrição*")).toBeInTheDocument();
    expect(screen.getByLabelText("Diretor*")).toBeInTheDocument();
    expect(screen.getByLabelText("Ator ou atores*")).toBeInTheDocument();
    expect(screen.getByLabelText("Gênero*")).toBeInTheDocument();
    expect(screen.getByLabelText("Ano de lançamento*")).toBeInTheDocument();
    expect(screen.getByLabelText("Imagem do pôster*")).toBeInTheDocument();
    expect(screen.getByText("Cadastrar")).toBeInTheDocument();
  });
});
