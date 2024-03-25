import styled from "styled-components";
import MoviePageImage from "../../components/movie/moviePageImage";
import MoviePageInfos from "../../components/movie/moviePageInfos";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import movieGetById from "../../api/movieGetById-api";

export default function MoviePage() {
  // Pego o id do filme pelo parâmetro da URL
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  // Quando o componente é renderizado eu chamo a função movieGetById para salvar o filme achado
  useEffect(() => {
    async function myMoviesGetFunction() {
      await movieGetById(id, setMovie, setLoading);
    }
    myMoviesGetFunction();
  }, []);

  // Passo as informações do filme como props para os componentes filhos
  return (
    <>
      <Container>
        {loading ? (
          <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmhxZXNrbzBicmZycWZ0a2p3ejhqeXdncDl3emY2ZzU1MmtlMm05dyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/W22b2eea2XxB6DiTWg/giphy.gif"></img>
        ) : (
          <div>
            <MoviePageImage movieImage={movie} />
            <MoviePageInfos movie={movie} />
          </div>
        )}
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 140px;
  div {
    display: flex;
  }
  img{
    width: 300px;
  }
`;
