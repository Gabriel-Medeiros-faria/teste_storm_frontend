import { useState } from "react";
import styled from "styled-components";
import logo from "../../assets/logo.jpeg";
import { useNavigate } from "react-router-dom";
import registerUserApi from "../../api/userRegister-api";
export default function UserRegistrationBox() {
  const [inputs, setInputs] = useState({});
  const [choice, setChoice] = useState("");
  const [erro, setErro] = useState("");
  const [positiveRequest, setPositiveRequest] = useState('')
  const navigate = useNavigate();

  //Pegar os valores do input se o usuário é admin ou não
  const handleChange = (event) => {
    setChoice(event.target.value);
  };

  //Pegar os valores dos inputs de texto pelo nome
  const handleInputChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  //Registrar um novo usuário no banco de dados
  async function registerUser(e) {
    e.preventDefault();

    // Verifico se o foi selecionado que o novo usuário será admin ou não
    if (!choice) {
      setErro("Por favor, selecione uma opção.");
      return;
    }

    // Coloco em uma variável o valor que se o choice for 'Sim' a variável fica com o valor true se não fica com o valor false
    const isAdminBoolean = choice === "Sim" ? true : false;

    // Construo o body da requisição que vou mandar para criar o usuário
    const body = {
      username: inputs.username,
      email: inputs.email,
      password: inputs.password,
      isAdmin: isAdminBoolean,
    };

    // Chamo a função registerUserApi() que está na pasta api para criar o usuário no banco de dados
    // Passo a função navigate para poder usá-la na função registerUserApi() ja que ela não é um componente, não podemos importá-la dentro da função
    // Passo setPositiveRequest para quando a requisição retornar algo positivo e renderizar a mensagem na tela
    await registerUserApi(body, setErro, navigate, setPositiveRequest);
  }

  return (
    <>
      <Container>
        <img src={logo}></img>
        <form onSubmit={registerUser}>
          <Inputs>
            <label>
              Nome de usuário<span>*</span>
            </label>
            <input
              required
              onChange={handleInputChange}
              name="username"
              type="text"
            ></input>
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
            <div className="choice">
              <p>O Usuário Será Admin?</p>
              <div>
                <label>
                  <input
                    type="radio"
                    value="Sim"
                    checked={choice === "Sim"}
                    onChange={handleChange}
                  />
                  Sim
                </label>
                <label>
                  <input
                    type="radio"
                    value="Não"
                    checked={choice === "Não"}
                    onChange={handleChange}
                  />
                  Não
                </label>
              </div>
            </div>
          </Inputs>
          <button type="submit">Cadastrar</button>
        </form>
        {erro && <p style={{ color: "red", marginTop: "10px" }}>{erro}</p>}
        {positiveRequest && <p style={{ color: "green", marginTop: "10px" }}>{positiveRequest}</p>}
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
  height: 600px;
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
