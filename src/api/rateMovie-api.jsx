import axios from "axios";

export default async function rateMovieApi(body, setErro, setPositiveRequest) {
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };

  // Utilizo a biblioteca axios para fazer a requisição get para buscar os filmes no banco de dados
  axios
    .post("http://localhost:8080/rateMovie", body, config)
    .then((resp) => {
      setPositiveRequest("Avaliado com sucesso!");
      setErro("");
    })
    .catch((err) => {
      setPositiveRequest("");
      setErro(err.response.data.name);
    });
}
