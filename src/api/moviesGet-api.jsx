import axios from "axios";

export default async function moviesGet(setMovies) {

  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  };

  // Utilizo a biblioteca axios para fazer a requisição get para buscar os filmes no banco de dados
  axios
    .get("http://localhost:8080/movieRegistration", config)
    .then((resp) => {
        setMovies(resp.data)
    })
    .catch((err) => {
        console.log(err)
    });
}
