import axios from "axios";

export default async function userUpdateApi(body, setErro, navigate, setIsLoggedIn) {

  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  };
console.log(token)
  // Utilizo a biblioteca axios para fazer a requisição put para atualizar o usuário
  axios
    .put("http://localhost:8080/userRegistration", body, config)
    .then(() => {
      setErro("");
      localStorage.clear()
      setIsLoggedIn(false)
      navigate("/");
    })
    .catch((err) => {
      setErro(err.response.data.name);
    });
}
