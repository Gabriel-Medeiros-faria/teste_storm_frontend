import axios from "axios";

export default async function movieRegisterApi(body, setErro, setPositiveRequest) {

  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  };

  // Utilizo a biblioteca axios para fazer a requisição post para criar o filme
  axios
    .post("http://localhost:8080/movieRegistration", body, config)
    .then(() => {
      setErro("");
      setInputs({})
      setPositiveRequest("Filme criado com sucesso")
    })
    .catch((err) => {
      setPositiveRequest("")
      setErro(err.response.data.name);
    });
}
