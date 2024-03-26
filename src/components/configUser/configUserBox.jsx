import styled from "styled-components";
import { FaUserCog } from "react-icons/fa";
import useUser from "../../utils/useUser";
import { useState } from "react";
import DeleteUserModalButton from "./deleteUserModalButton";
import userUpdateApi from "../../api/userUpdate-api";
import { useNavigate } from "react-router-dom";

export default function ConfigUserBox({setIsLoggedIn}) {
  const [inputs, setInputs] = useState({});
  const [erro, setErro] = useState('')
  const navigate = useNavigate()
  const handleInputChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  async function updateUser(e){
    e.preventDefault();

    // Verifico se ao menos um input está preenchido para atualizar o usuário
    if(inputs.name || inputs.email || inputs.password){
        const body = {
            username: inputs.name,
            email: inputs.email,
            password: inputs.password
        }
        await userUpdateApi(body, setErro, navigate, setIsLoggedIn)
    }else{
        setErro("Escreva ao menos um campo para atualizar!")
    }
  }
  return (
    <>
      <Container>
        <h1>
          <FaUserCog size={25} /> <p>Configurações de usuário</p>
        </h1>

        <form onSubmit={updateUser}>
          <Inputs>
            <label>Nome atual: {useUser().name}</label>
            <input
              onChange={handleInputChange}
              placeholder="Digite o novo nome"
              name="name"
              type="text"
            ></input>
            <label>E-mail atual: {useUser().email}</label>
            <input
              onChange={handleInputChange}
              placeholder="Digite o novo email"
              name="email"
              type="text"
            ></input>
            <label>Digite sua nova senha</label>
            <input
              onChange={handleInputChange}
              placeholder="Nova senha"
              name="password"
              type="text"
            ></input>
          </Inputs>
          <button >Atualizar usuário</button>
          {erro && <p style={{ color: "red", marginTop: "10px", textAlign: "center" }}>{erro}</p>}
        </form>
          <DeleteUserModalButton setIsLoggedIn={setIsLoggedIn}/>
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
  padding: 15px;
  width: 400px;
  height: auto;
  .deleteUser{
    background-color: #9e0101;
    margin-top: 15px;
    width: 95%;
      border: none;
      height: 40px;
      font-size: 16px;
      cursor: pointer;
      border-radius: 10px;
      color: white;
      &:hover {
        background-color: #d80000;
      }
  }
  h1 {
    display: flex;
    align-items: center;
    font-size: 20px;
    p {
      margin-left: 10px;
    }
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
  .imageFile {
    border: none;
  }
`;
