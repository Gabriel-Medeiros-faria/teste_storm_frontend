import styled from "styled-components";
import MovieRegisterBox from "../../components/movieRegister/movieRegisterBox";
import useUser from "../../utils/useUser";

export default function MovieRegisterPage() {
  return (
    <>
      <Container>
        {/* Verifico se o usuário logado é admin para poder cadastrar um novo filme */}
        {useUser().isAdmin ? (
          <MovieRegisterBox />
        ) : (
          "Você não tem permissão para criar um filme!"
        )}
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 140px;
`;
