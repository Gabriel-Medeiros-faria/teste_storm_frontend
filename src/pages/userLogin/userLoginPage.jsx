import styled from "styled-components";
import UserLoginBox from "../../components/userLogin/userLoginBox";

export default function UserLoginPage({setIsLoggedIn}){
    return(
        <>
            <Container>
                <UserLoginBox setIsLoggedIn={setIsLoggedIn}/>
            </Container>
        </>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  padding: 0 140px;
`;
