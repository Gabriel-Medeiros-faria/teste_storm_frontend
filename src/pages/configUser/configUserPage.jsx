import styled from "styled-components";
import ConfigUserBox from "../../components/configUser/configUserBox";

export default function ConfigUserPage({setIsLoggedIn}) {
  return (
    <>
      <Container>
        <ConfigUserBox setIsLoggedIn={setIsLoggedIn}/>
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
