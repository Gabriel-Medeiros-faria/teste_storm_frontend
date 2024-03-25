import axios from "axios";
import useUser from "../utils/useUser";

export default async function userDeleteApi(navigate, setIsLoggedIn) {
  // Utilizo a biblioteca axios para fazer a requisição post para logar o usuário
  // Coloco o headers e o body da requisição de modo diferente porque a requisição delete é desse modo, implantando o objeto diretamente na requisição 
  axios
    .delete("http://localhost:8080/userRegistration", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: {
        userId: useUser().userId,
      },
    })
    .then(() => {
      localStorage.clear();
      setIsLoggedIn(false);
      navigate("/userLogin");
    })
    .catch((err) => {
      console.log(err);
      alert(err.response.data.name);
    });
}
