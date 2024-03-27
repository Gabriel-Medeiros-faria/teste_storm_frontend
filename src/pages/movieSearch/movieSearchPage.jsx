import styled from "styled-components"
import MoviesSearch from "../../components/movieSearch/moviesSearch"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import moviesBySearchBar from "../../api/moviesBySearchBar-api"

export default function MovieSearchPage(){
    const [loading, setLoading] = useState(true);
    const {search} = useParams()
    const [movies, setMovies] = useState()

    useEffect(()=>{
        // Faço a pesquisa do filme colocando o que foi pesquisado no body da requisição 
        async function myMoviesGetFunction(){
            const body = {
                search
            }
            await moviesBySearchBar(body, setMovies, setLoading)
          }
          myMoviesGetFunction()
    },[search])

    return(
        <>
            <Container>
                {loading ? <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmhxZXNrbzBicmZycWZ0a2p3ejhqeXdncDl3emY2ZzU1MmtlMm05dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/W22b2eea2XxB6DiTWg/giphy.gif"></img> : <MoviesSearch movies={movies}/>}
            </Container>
        </>
    )
}

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0 150px;
`