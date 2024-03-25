import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom";
import GlobalStyle from "./styles/globalStyle";
import Header from "./components/header/Header";
import HomePage from "./pages/home/homePage";
import MoviePage from "./pages/movie/moviePage";
import UserRegistrationPage from "./pages/userRegistration/userRegistrationPage";
import Footer from "./components/footer/footer";
import UserLoginPage from "./pages/userLogin/userLoginPage";
import AuthProvider from "./context/authContext";
import { useState } from "react";
import MovieRegisterPage from "./pages/movieRegister/movieRegisterPage";
import ConfigUserPage from "./pages/configUser/configUserPage";

function App() {
  // Estado para verificar se o usuário está logado e renderizar o header
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("user"));

  const isUserAuthenticated = () => {
    // Verificar se há um usuário de autenticação armazenado localmente
    const logged = localStorage.getItem("user")

    // Retornar verdadeiro se houver um usuário de autenticação válido
    return !!logged
  };
  
  // Componente de redirecionamento para a página de login caso o usuário não esteja logado 
  const PrivateRoute = ({ element }) => {
    return isUserAuthenticated() ? (
      element
    ) : (
      <Navigate to="/userLogin" replace />
    );
  };

  // Renderiza todas as páginas do site de acordo com as rotas
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        {isLoggedIn && <Header setIsLoggedIn={setIsLoggedIn} />}
        <AuthProvider>
          <Routes>
            <Route path="/" element={<PrivateRoute element={<HomePage />} />} />
            <Route path="/movie/:id" element={<PrivateRoute element={<MoviePage />} />} />
            <Route path="/movieRegister" element={<PrivateRoute element={<MovieRegisterPage />} />} />
            <Route path="/configUser" element={<PrivateRoute element={<ConfigUserPage setIsLoggedIn={setIsLoggedIn}/>} />} />
            <Route
              path="/userRegistration"
              element={<UserRegistrationPage />}
            />
            <Route path="/userLogin" element={<UserLoginPage setIsLoggedIn={setIsLoggedIn}/>} />
          </Routes>
        </AuthProvider>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
