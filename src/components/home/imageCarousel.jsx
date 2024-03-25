import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

export default function ImageCarousel() {

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
        <div className="itemCarousel">
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSrIZ3t5bxsV4GxZmWNtJ0af8mWO5Zmm46_r5uf_ijWBg7DQcYl"
            alt="Image 1"
          />
          <div className="carousel-caption">
            <h3>Texto da imagem 1</h3>
            <p>Descrição da imagem 1</p>
          </div>
        </div>
      {/* <Slider {...settings}>
        <div className="itemCarousel">
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSrIZ3t5bxsV4GxZmWNtJ0af8mWO5Zmm46_r5uf_ijWBg7DQcYl"
            alt="Image 1"
          />
          <div className="carousel-caption">
            <h3>Texto da imagem 1</h3>
            <p>Descrição da imagem 1</p>
          </div>
        </div>
        <div className="itemCarousel">
          <img
            src="https://s2-techtudo.glbimg.com/HTCxOad0Oc8E_uW1Q5SsNwlk8PE=/0x0:1620x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/1/N/0XOeAgSXOGmdGnyL82pw/google-tradutor.jpg"
            alt="Image 2"
          />
          <div className="carousel-caption">
            <h3>Texto da imagem 2</h3>
            <p>Descrição da imagem 2</p>
          </div>
        </div>
      </Slider> */}
    </Container>
  );
}

const Container = styled.div`
width: 600px;
img{
    width: 600px;
    height: auto;
}
  .slick-slide img {
    width: 500px;
    height: auto;
  }
  .itemCarousel{
      position: relative;
    .carousel-caption{
        position: absolute;
        bottom: 0;
        left: 100px;
        color: white;
    }
  }

`;
