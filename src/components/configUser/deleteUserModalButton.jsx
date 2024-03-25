import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function DeleteUserModalButton() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();

  function deleteUser() {
    alert("Usuário excluído com sucesso");
    navigate("/userLogin");
  }

  // Contrução do Modal e o botão que ativa o Modal
  return (
    <Container>
      <ButtonModal onClick={handleOpen}>Excluir usuário</ButtonModal>
      <CustomModal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <ModalContent>
            <h1>Tem certeza que deseja excluir seu usuário?</h1>
            <div>
            <button onClick={() => deleteUser()}>Sim</button>
            <button onClick={() => handleClose()}>Não</button>
            </div>
          </ModalContent>
        </Fade>
      </CustomModal>
    </Container>
  );
}

const Container = styled.div`

`;

const ButtonModal = styled.button`
      border: none;
      background-color: #9e0101;
      margin-top: 15px;
      width: 350px;
      height: 40px;
      font-size: 16px;
      cursor: pointer;
      border-radius: 10px;
      color: white;
      &:hover {
        background-color: #920000;
      }

`

const CustomModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  position: absolute;
  font-size: 20px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  color: black;
  background-color: white;
  border: 2px solid #000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  padding: 20px;
  button {
    margin-top: 15px;
    border: none;
    width: 100px;
    background-color: #9e0101;
    height: 40px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 10px;
    color: white;
    &:hover {
      background-color: #920000;
    }
  }
  div{
    button{
      margin: 10px;
    }
  }
`;
