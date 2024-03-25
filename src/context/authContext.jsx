import { jwtDecode } from 'jwt-decode';
import React, {createContext, useState} from "react";

export const AuthContext = createContext({})

function AuthProvider({children}){
    
    function login(token){
        // Salvo o token no localStorage para poder usá-lo do headers da requisição
        localStorage.setItem('token', token)

        // Descriptografo o token para poder pegar as informações do usuário salva nele
        const decodedToken = jwtDecode(token)

        // Seto meu localStorage com as informações do usuário para poder usá-la no hook useUser() e poder usar o useUser() em qualquer lugar do código e ficar mais semântico
        localStorage.setItem('user', JSON.stringify(decodedToken))
    }

    return(
        <AuthContext.Provider value={{login}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider