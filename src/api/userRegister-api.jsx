import axios from "axios";

export default async function userRegisterApi(body, setErro, navigate, setPositiveRequest) {

  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  };

  // Utilizo a biblioteca axios para fazer a requisição post para criar o usuário
  axios
    .post("http://localhost:8080/userRegistration", body, config)
    .then(() => {
      setErro("");
      setPositiveRequest("Usuário criado com sucesso")
      navigate("/userLogin");
    })
    .catch((err) => {
      setPositiveRequest("")
      setErro(err.response.data.name);
    });
}
