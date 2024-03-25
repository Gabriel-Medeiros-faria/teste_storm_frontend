import styled from "styled-components";
import UserRegistrationBox from "../../components/userRegistration/userRegistrationBox";
import useUser from "../../utils/useUser";

export default function UserRegistrationPage() {
  return (
    <>
    {/* Verifico se o usuário logado é admin para poder criar um novo usuário */}
      <Container>
        {useUser().isAdmin ? (
          <UserRegistrationBox />
        ) : (
          "Você não tem permissão para criar um usuário!"
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
