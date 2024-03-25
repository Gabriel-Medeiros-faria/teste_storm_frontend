import styled from "styled-components"

export default function MoviePageInfos({movie}){
    console.log(movie)
    return(
        <>
            <Container>
                <h1>{movie.title}</h1>
                <div>
                    <p>Diretor: {movie.director}</p>
                    <p>Gênero: {movie.gender}</p>
                    <p>Ano de lançamento: {movie.yearLaunch}</p>
                </div>
                <p className="description">{movie.description}</p>
            </Container>
        </>
    )
}

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: start;
margin-left: 20px;
.description{
    font-size: 15px;
}
h1{
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 20px;
}
div{
    display: flex;
    margin-bottom: 20px;
    p{
        border-right: 1px solid white;
        border-left: 1px solid white;
        padding:0 10px 0 10px ;
    }
}
`