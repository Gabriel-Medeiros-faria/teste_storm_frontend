import styled from "styled-components";
import { MdLocalMovies } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function MoviesSearch({movies}){

  const navigate = useNavigate()

  // Componente que renderiza os filmes encontrados
    return(
        <>
        <Container>
        <p className="titleSetion">Filmes Econtrados!</p>
        <div className="movies">
          {movies.map((movie)=> (
            <div className="movie" onClick={()=> navigate(`/movie/${movie.id}`)}>
            <img src={movie.imagePoster}></img>
            <div className="infosMovie">
              <p className="title">{movie.title}</p>
              <div className="knowMore">
                <MdLocalMovies /> Saiba mais
              </div>
            </div>
          </div>
          ))}
        </div>
      </Container>
        </>
    )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  .titleSetion{
    margin-bottom: 20px;
    padding-left: 10px;
    border-left: 3px solid #F5C518;
  }
  .movies {
    display: flex;
    flex-wrap: wrap;
  }
  .movie{
  cursor: pointer;
    margin: 15px 15px 15px 0;
    img{
      width: 190px;
      height: 250px;
      
    }
  }
  .titleSetion {
    font-size: 20px;
  }

  .infosMovie {
    background-color: #1a1a1a;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    .knowMore {
        display: flex;
        align-items: center;
        margin-top: 20px;
        font-size: 20px;
        justify-content: center;
        cursor: pointer;
        padding: 15px;
        &:hover{
            background-color: #2C2C2C;
        }
      }
  }
`;
