import { BrowserRouter as Router } from "react-router-dom";
import { render, fireEvent, waitFor } from "@testing-library/react";
import DeleteUserModalButton from "../components/configUser/deleteUserModalButton";

jest.mock("../api/userDelete-api", () => jest.fn());
describe("DeleteUserModalButton", () => {
  it("should open the modal when clicking the button", async () => {
    const { getByText, getByTestId } = render(
      <Router>
        <DeleteUserModalButton />
      </Router>
    );
    const button = getByText("Excluir usuário");

    fireEvent.click(button);

    await waitFor(() => {
        expect(getByText('Tem certeza que deseja excluir seu usuário?')).toBeInTheDocument();
    });
  });

  it('must close the modal when clicking the "No" button', async () => {
    const { getByText, getByTestId, queryByTestId } = render(
      <Router>
        <DeleteUserModalButton />
      </Router>
    );
    const button = getByText("Excluir usuário");

    fireEvent.click(button);

    const naoButton = getByText("Não");
    fireEvent.click(naoButton);

    await waitFor(() => {
      expect(queryByTestId("modal-content")).not.toBeInTheDocument();
    });
  });

  it('must call the deleteUser function when clicking the "Yes" button', async () => {
    const { getByText } = render(
      <Router>
        <DeleteUserModalButton />
      </Router>
    );
    const button = getByText("Excluir usuário");

    fireEvent.click(button);

    const simButton = getByText("Sim");
    fireEvent.click(simButton);

    await waitFor(() => {
      expect(require("../api/userDelete-api")).toHaveBeenCalled();
    });
  });
});
