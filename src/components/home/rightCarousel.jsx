import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function RightCarousel({ movies }) {
  const shuffledMovies = movies.sort(() => Math.random() - 0.5);
  const selectedMovies = shuffledMovies.slice(0, 3);
  const navigate = useNavigate()
  return (
    <>
      <Container>
        {selectedMovies.map((movie) => (
          <div className="itemCarousel" onClick={()=> navigate(`/movie/${movie.id}`)} data-testid={`movie-image-${movie.id}`}>
            <img src={movie.imagePoster} alt={`Poster do filme ${movie.title}`} />
            <div className="carousel-caption">
              <h3>{movie.title}</h3>
              <p>{movie.description}</p>
            </div>
          </div>
        ))}
      </Container>
    </>
  );
}

const Container = styled.div`
  img {
    width: 115px;
    height: 175px;
  }

  .itemCarousel {
    position: relative;
    margin-bottom: 10px;

    .carousel-caption {
      box-sizing: border-box;
      padding: 10px; /* Adicionei padding para afastar o texto das bordas */
      h3 {
        font-size: 15px;
        margin: 0; /* Removi margens para garantir que o texto esteja alinhado corretamente */
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap; /* Impede que o texto quebre em várias linhas */
        margin: 0; /* Removi margens para garantir que o texto esteja alinhado corretamente */
        font-size: 14px;
      }
      position: absolute;
      width: 100%; /* Defini a largura para ocupar toda a largura do componente pai */
      background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.8) 90%,
        /* Alterei a posição do gradiente */ rgba(0, 0, 0, 0)
      );
      bottom: 0;
      color: white;
    }
  }
`;
