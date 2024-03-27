import axios from "axios";

export default async function userLoginApi(body, setErro, login, navigate, setIsLoggedIn){

    // Utilizo a biblioteca axios para fazer a requisição post para logar o usuário
    axios
      .post("http://localhost:8080/userLogin", body)
      .then((resp) => {
        login(resp.data)
        setIsLoggedIn(true)
        navigate("/")
      })
      .catch((err) => {
        setErro(err.response.data.name)
      });
}