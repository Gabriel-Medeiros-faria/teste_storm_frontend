import { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../../assets/logo.jpeg";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

import userLoginApi from "../../api/userLogin-api";
import useUser from "../../utils/useUser";
import { useNavigate } from "react-router-dom";

export default function UserLoginBox({setIsLoggedIn}) {
  const [erro, setErro] = useState("");
  const [inputs, setInputs] = useState({});
  const navigate = useNavigate()

  // Verifico se o usuário já não está logado, se ele ja estiver, é redirecionado para a página Home
  useEffect(() => {
    if (localStorage.getItem('user')) {
      navigate("/");
    }
  }, [navigate]);

  // Busco a função login() do AuthContext com o useContext para poder setar as informações do usuário dentro do AuthContext
  const { login } = useContext(AuthContext);

  const handleInputChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  async function loginUser(e) {
    e.preventDefault();

    // Crio o body da requisição
    const body = {
      email: inputs.email,
      password: inputs.password,
    };

    // Chamo a função userLoginApi() que está na pasta api para logar o usuário no banco de dados
    // Passo a função login para poder usá-la dentro de userLoginApi()
    // Passo a função navigate para poder usá-la na função userLoginApi() ja que ela não é um componente, não podemos importá-la dentro da função
    await userLoginApi(body, setErro, login, navigate)

    // Atualizo o estado para para true quando o usuário logar e o header aparecer na página do usuário
    setIsLoggedIn(true)
    
  }

  return (
    <>
      <Container>
        <img src={logo}></img>
        <form onSubmit={loginUser}>
          <Inputs>
            <label>
              E-mail<span>*</span>
            </label>
            <input
              required
              onChange={handleInputChange}
              name="email"
              type="email"
            ></input>
            <label>
              Senha<span>*</span>
            </label>
            <input
              required
              onChange={handleInputChange}
              name="password"
              type="password"
            ></input>
          </Inputs>
          <button type="submit">Entrar</button>
        </form>
        {erro && <p style={{ color: "red", marginTop: "10px" }}>{erro}</p>}
      </Container>
    </>
  );
}

const Container = styled.div`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  background-color: #1a1a1a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 500px;
  img {
    width: 150px;
    border-radius: 10px;
  }
  form {
    display: flex;
    flex-direction: column;
    button {
      border: none;
      background-color: #0c406f;
      height: 40px;
      font-size: 16px;
      cursor: pointer;
      border-radius: 10px;
      color: white;
      &:hover {
        background-color: #215c8f;
      }
    }
    .choice {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 15px;
      div {
        display: flex;
      }
      label {
        display: flex;
        align-items: center;
        margin-right: 15px;
        font-size: 15px;
      }
      input {
        cursor: pointer;
        width: 20px;
      }
    }
  }
`;

const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  input {
    border: 1px solid #eaeaea;
    border-radius: 5px;
    width: 350px;
    height: 40px;
    margin-bottom: 10px;
    @media (max-width: 450px) {
      width: 400px;
    }
  }
  label {
    margin-bottom: 5px;
    font-weight: bold;
  }
  span {
    color: red;
  }
`;
