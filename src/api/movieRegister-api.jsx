import axios from "axios";

export default async function movieRegisterApi(
  body,
  setErro,
  setPositiveRequest,
  setInputs,
  setActors
) {
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };

  // Utilizo a biblioteca axios para fazer a requisição post para criar o filme
  axios
    .post("http://localhost:8080/movieRegistration", body, config)
    .then(() => {
      setErro("");
      // Limpo todos os campos assim que o filme é criado
      setInputs({
        title: "",
        description: "",
        director: "",
        gender: "",
        yearLaunch: "",
      });
      setActors([])
      setPositiveRequest("Filme criado com sucesso");
    })
    .catch((err) => {
      console.log(err);
      setPositiveRequest("");
      setErro(err.response.data.name);
    });
}
