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
  const [actors, setActors] = useState([]);

  // Função para tranformar a imagem passada em string
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      // Quando a leitura estiver completa, atualizo o estado com a string da imagem
      setImageString(reader.result);
    };

    if (file) {
      // Leitura do conteúdo da imagem como uma string
      reader.readAsDataURL(file);
    }
  };

  const handleAddActor = () => {
    if (inputs.actor) {
      setActors([...actors, inputs.actor]);
      setInputs({ ...inputs, actor: "" }); // Limpa o campo de entrada após adicionar o ator
    }
  };

  const handleInputChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
  };

  async function registerMovie(e) {
    e.preventDefault();

    if(actors.length > 0){
      const body = {
        userId: useUser().userId,
        title: inputs.title,
        description: inputs.description,
        director: inputs.director,
        gender: inputs.gender,
        yearLaunch: Number(inputs.yearLaunch),
        imagePoster: imageString,
        actors: actors
      };
  
      // Chamo a função movieRegisterApi() que está na pasta api para criar o filme no banco de dados
      // Passo os states setErro e setPositiveRequest para atualizar a mensagem que aparecerá para o usuário
      // Passo os states setInputs e setActors para poder limpar os campos depois da requisição
      await movieRegisterApi(body, setErro, setPositiveRequest, setInputs, setActors);
    }else{setErro('Digite pelo menos um ator!')}

    
  }

  return (
    <>
      <Container>
        <img src={logo}></img>
        <form onSubmit={registerMovie}>
          <Inputs>
            <label htmlFor="title">
              Título do filme<span>*</span>
            </label>
            <input
              required
              onChange={handleInputChange}
              value={inputs.title}
              id="title"
              name="title"
              type="text"
            ></input>
            <label htmlFor="description">
              Descrição<span>*</span>
            </label>
            <input
              required
              value={inputs.description}
              onChange={handleInputChange}
              id="description"
              name="description"
            ></input>
            <label htmlFor="director">
              Diretor<span>*</span>
            </label>
            <input
              required
              value={inputs.director}
              onChange={handleInputChange}
              id="director"
              name="director"
            ></input>
            <label htmlFor="actor">
              Ator ou atores<span>*</span>
            </label>
            <div className="addActorInput">
            <input
                value={inputs.actor}
                onChange={handleInputChange}
                id="actor"
                name="actor"
              ></input>
            <button type="button" onClick={handleAddActor} className="addActor">+</button>
            <div className="actors">
            {actors.map((actor, index) => (
              <div key={index} >{actor}</div> // Renderiza os atores abaixo do campo de entrada
            ))}
            </div>
            </div>
            <label htmlFor="gender">
              Gênero<span>*</span>
            </label>
            <input required onChange={handleInputChange} name="gender" value={inputs.gender} id="gender"></input>
            <label htmlFor="yearLaunch">
              Ano de lançamento<span>*</span>
            </label>
            <input
              required
              onChange={handleInputChange}
              name="yearLaunch"
              id="yearLaunch"
              type="number"
              value={inputs.yearLaunch}
            ></input>
            <label htmlFor="imagePoster">
              Imagem do pôster<span>*</span>
            </label>
            <input
              type="file"
              onChange={handleImageUpload}
              className="imageFile"
              id="imagePoster"
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
  .addActorInput{
    position: relative;
    .actors{
      display: flex;
      div{
        padding: 0 5px;
        border-right: solid 1px white;
        margin-bottom: 10px;
      }
    }
  }
  .addActor{
    position: absolute;
    right: 0;
    border-radius: 0;
  }
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
