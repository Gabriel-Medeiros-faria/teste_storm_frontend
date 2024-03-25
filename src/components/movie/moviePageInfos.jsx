import styled from "styled-components";
import ModalAvaliationMovie from "./modalAvaliationMovie";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useState } from "react";

export default function MoviePageInfos({ movie }) {
  const [average, setAverage] = useState(0);
  const [totalAvaliations, setTotalAvaliations] = useState(0)

  // Calculo a media assim que o componente é renderizado
  useState(() => {
    // Verifica se há avaliações na array
    if (movie.Avaliations.length === 0) {
      return 0; // Retorna 0 se não houver avaliações
    }

    // Soma todas as avaliações
    const sumOfAssessments = movie.Avaliations.reduce((sum, avaliation) => {
      console.log("Adicionando avaliação:", movie.Avaliations.assessment);
      return sum + avaliation.assessment;
    }, 0);

    // Calculate the average
    const average = sumOfAssessments / movie.Avaliations.length;
    setTotalAvaliations(movie.Avaliations.length)
    setAverage(average);
  }, []);

  return (
    <>
      <Container>
        <ModalAvaliationMovie movieId={movie.id} />
        <div className="topInfosMovie">
          <h1>{movie.title}</h1>
          <div className="avaliationMovie">
            <div>
            <FaStar color="gold" />
            <span>{average}/4</span>
            </div>
            <span>Total: {totalAvaliations}</span>
          </div>
        </div>
        <div>
          <p>Diretor: {movie.director}</p>
          <p>Gênero: {movie.gender}</p>
          <p>Ano de lançamento: {movie.yearLaunch}</p>
        </div>
        <p className="description">{movie.description}</p>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-left: 20px;
  .avaliationMovie {
    display: flex;
    flex-direction: column;
    align-items: center;
    span{
        margin: 5px;
    }
    div{
        margin: 0;
    }
    p {
      border: none;
    }
  }
  .topInfosMovie {
    display: flex;
    justify-content: space-between;
  }
  .description {
    font-size: 15px;
  }
  h1 {
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 20px;
  }
  div {
    display: flex;
    margin-bottom: 20px;
    p {
      border-right: 1px solid white;
      border-left: 1px solid white;
      padding: 0 10px 0 10px;
    }
  }
`;
