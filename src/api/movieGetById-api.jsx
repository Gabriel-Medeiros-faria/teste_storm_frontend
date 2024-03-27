import axios from "axios";

export default async function movieGetById(id, setMovie, setLoading) {

  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  };

  // Utilizo a biblioteca axios para fazer a requisição get para buscar os filmes no banco de dados
  axios
    .get(`http://localhost:8080/movieRegistration/${id}`, config)
    .then((resp) => {
    setMovie(resp.data)
    setLoading(false)
    })
    .catch((err) => {
        setLoading(false)
    });
}
