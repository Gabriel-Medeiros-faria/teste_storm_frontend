import { render, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ConfigUserBox from "../components/configUser/configUserBox";

//Simulando um usuário retornado pelo hook useUser, fornecendo um objeto com uma propriedade name.
jest.mock("../utils/useUser", () => ({
  __esModule: true,
  default: jest
    .fn()
    .mockReturnValue({ name: "Nome de Exemplo", email: "email@example.com" }), // Simulando um usuário retornado pelo hook useUser
}));

// Mock da função de atualização do usuário
jest.mock('../api/userUpdate-api', () => ({
    __esModule: true,
    default: jest.fn().mockResolvedValue(), // Simula uma atualização bem-sucedida do usuário
}));

describe("ConfigUserBox", () => {
  it("renders without crashing", () => {
    render(
      <Router>
        <ConfigUserBox />
      </Router>
    );
  });

  it("displays error message if no input is provided for updating user", async () => {
    const { getByText } = render(
      <Router>
        <ConfigUserBox />
      </Router>
    );

    // Simulando clique no botão de envio do formulário sem preencher nenhum campo
    fireEvent.click(getByText("Atualizar usuário"));

    // Aguardando a exibição da mensagem de erro
    await waitFor(() => {
      expect(
        getByText("Escreva ao menos um campo para atualizar!")
      ).toBeInTheDocument();
    });
  });
});
