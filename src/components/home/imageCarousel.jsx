import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function ImageCarousel({ movies }) {
  const shuffledMovies = movies.sort(() => Math.random() - 0.5);
  const selectedMovies = shuffledMovies.slice(0, 4);
  const navigate = useNavigate()
  //Configurações do carrossel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  //Renderização do carrossel
  return (
    <Container>
      <Slider {...settings}>
        {selectedMovies.map((movie) => (
          <div className="itemCarousel" onClick={()=> navigate(`/movie/${movie.id}`)}>
            <img src={movie.imagePoster} alt={`Image ${movie.id}`} />
            <div className="carousel-caption">
              <h3>{movie.title}</h3>
              <p>{movie.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </Container>
  );
}

const Container = styled.div`
  width: 400px;
  margin-right: 50px;
  .slick-slide img {
    width: 400px;
    height: 550px;
  }

  .itemCarousel {
    position: relative;
    cursor: pointer;
    .carousel-caption {
      box-sizing: border-box;
      padding: 10px; /* Adicionei padding para afastar o texto das bordas */
      h3 {
        font-size: 20px;
        margin: 0; /* Removi margens para garantir que o texto esteja alinhado corretamente */
      }
      p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap; /* Impede que o texto quebre em várias linhas */
        margin: 0; /* Removi margens para garantir que o texto esteja alinhado corretamente */
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