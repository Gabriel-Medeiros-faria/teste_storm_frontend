import axios from "axios";

export default async function moviesBySearchBar(body, setMovies, setLoading) {

  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  };

  // Utilizo a biblioteca axios para fazer a requisição get para pesquisar o filme
  axios
    .post("http://localhost:8080/movieRegistration/search", body, config)
    .then((resp) => {
        setMovies(resp.data)
        setLoading(false)
    })
    .catch((err) => {
      console.log(err)
      setLoading(false)
    });
}
