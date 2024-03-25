import axios from "axios";

export default async function userUpdateApi(body, setErro, navigate) {

  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  };
console.log(body)
  // Utilizo a biblioteca axios para fazer a requisição put para atualizar o usuário
  axios
    .put("http://localhost:8080/userRegistration", body, config)
    .then(() => {
      setErro("");
      localStorage.clear()
      navigate("/");
    })
    .catch((err) => {
        console.log(err)
      setErro(err.response.data.name);
    });
}
