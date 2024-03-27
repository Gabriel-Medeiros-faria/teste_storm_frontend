import styled from "styled-components";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import rateMovieApi from "../../api/rateMovie-api";
import useUser from "../../utils/useUser";

export default function ModalAvaliationMovie({ movieId }) {
  const [rating, setRating] = useState(0);
  const [open, setOpen] = useState(false);
  const [erro, setErro] = useState("");
  const [positiveRequest, setPositiveRequest] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleClick = (value) => {
    // Atualiza o estado da avaliação quando uma estrela é clicada
    setRating(value);
  };

  async function assess() {
    // Verifico se a avaliação do filme é diferente de 0 para o usuário poder avaliar
    if (rating !== 0) {
      const body = {
        userId: useUser().userId,
        movieId: movieId,
        assessment: rating,
      };

      await rateMovieApi(body, setErro, setPositiveRequest);
    }
  }

  // Componete de estrela para renderizá-las
  const Star = ({ filled, onClick }) => (
    <span style={{ cursor: "pointer" }} onClick={onClick}>
      {filled ? <FaStar color="gold" /> : <FaRegStar color="gold" />}
    </span>
  );

  return (
    <Container>
      <ButtonModal onClick={handleOpen}>
        <p>
          Avaliar filme <FaStar color="gold" />
        </p>
      </ButtonModal>
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
            <div>
              {[1, 2, 3, 4].map((value) => (
                <Star
                  key={value}
                  filled={value <= rating}
                  onClick={() => handleClick(value)}
                />
              ))}
            </div>
            <button onClick={() => assess()}>Avaliar</button>
            {erro && <p style={{ color: "red", marginTop: "10px" }}>{erro}</p>}
            {positiveRequest && (
              <p style={{ color: "green", marginTop: "10px" }}>
                {positiveRequest}
              </p>
            )}
          </ModalContent>
        </Fade>
      </CustomModal>
    </Container>
  );
}

const Container = styled.div``;

const ButtonModal = styled.button`
  border: none;
  background-color: #0c406f;
  margin-top: 15px;
  width: 350px;
  height: 40px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 10px;
  color: white;
  &:hover {
    background-color: #055daa;
  }
`;

const CustomModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled(Box)`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  position: absolute;
  font-size: 20px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  color: black;
  background-color: #161616;
  border: 2px solid #000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  padding: 20px;
  button {
    margin-top: 15px;
    border: none;
    width: 100px;
    background-color: #0c406f;
    height: 40px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 10px;
    color: white;
    &:hover {
      background-color: #055daa;
    }
  }
`;
