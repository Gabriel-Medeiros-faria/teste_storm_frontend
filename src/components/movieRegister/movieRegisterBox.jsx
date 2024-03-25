import styled from "styled-components";
import logo from "../../assets/logo.jpeg";
import { useState } from "react";
import movieRegisterApi from "../../api/movieRegister-api";
import useUser from "../../utils/useUser";

export default function MovieRegisterBox() {
  const [inputs, setInputs] = useState({});
  const [erro, setErro] = useState("");
  const [positiveRequest, setPositiveRequest] = useState("");
  const [imageString, setImageString] = useState("");

  // Função para tranformar a imagem passada em string
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      // Quando a leitura estiver completa, atualize o estado com a string da imagem
      setImageString(reader.result);
    };

    if (file) {
      // Leitura do conteúdo da imagem como uma string
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  async function registerMovie(e) {
    e.preventDefault();

    const body = {
      userId: useUser().userId,
      title: inputs.title,
      description: inputs.description,
      director: inputs.director,
      gender: inputs.gender,
      yearLaunch: Number(inputs.yearLaunch),
      imagePoster: imageString,
    };

    // Chamo a função movieRegisterApi() que está na pasta api para criar o filme no banco de dados
    // Passo os states setErro e setPositiveRequest para atualizar a mensagem que aparecerá para o usuário
    await movieRegisterApi(body, setErro, setPositiveRequest);
  }

  return (
    <>
      <Container>
        <img src={logo}></img>
        <form onSubmit={registerMovie}>
          <Inputs>
            <label>
              Título do filme<span>*</span>
            </label>
            <input
              required
              onChange={handleInputChange}
              value={inputs.title}
              name="title"
              type="text"
            ></input>
            <label>
              Descrição<span>*</span>
            </label>
            <input
              required
              value={inputs.description}
              onChange={handleInputChange}
              name="description"
            ></input>
            <label>
              Diretor<span>*</span>
            </label>
            <input
              required
              value={inputs.director}
              onChange={handleInputChange}
              name="director"
            ></input>
            <label>
              Gênero<span>*</span>
            </label>
            <input required onChange={handleInputChange} name="gender" value={inputs.gender}></input>
            <label>
              Ano de lançamento<span>*</span>
            </label>
            <input
              required
              onChange={handleInputChange}
              name="yearLaunch"
              type="number"
              value={inputs.yearLaunch}
            ></input>
            <label>
              Imagem do pôster<span>*</span>
            </label>
            <input
              type="file"
              onChange={handleImageUpload}
              className="imageFile"
              placeholder="Escolha a imagem do filme"
              required
            />
            {!imageString ? (
              ""
            ) : (
              <img
                src={imageString}
                alt="Imagem Carregada"
                style={{ maxWidth: "300px", marginBottom: "20px" }}
              />
            )}
          </Inputs>
          <button type="submit">Cadastrar</button>
        </form>
        {erro && <p style={{ color: "red", marginTop: "10px" }}>{erro}</p>}
        {positiveRequest && (
          <p style={{ color: "green", marginTop: "10px" }}>{positiveRequest}</p>
        )}
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
