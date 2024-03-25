import { FaStar, FaRegStar } from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";
import styled from "styled-components";

export default function RecommendedMovies() {
  return (
    <>
      <Container>
        <p className="titleSetion">Top 5 Filmes Recomendados Para Você!</p>
        <div className="movies">
          
          <div className="movie">
            <img src="https://i.pinimg.com/236x/ff/86/d2/ff86d2a1214f4fbf35b39c4a0a5e00c4.jpg"></img>
            <div className="infosMovie">
              <div className="avaliation">
                <FaStar className="assessments" color="#F5C518"/>
                8,8 <FaRegStar className="assess" />
              </div>
              <p className="title">Título do filme</p>
              <div className="knowMore">
                <MdLocalMovies /> Saiba mais
              </div>
            </div>
          </div>
          <div className="movie">
            <img src="https://i.pinimg.com/236x/ff/86/d2/ff86d2a1214f4fbf35b39c4a0a5e00c4.jpg"></img>
            <div className="infosMovie">
              <div className="avaliation">
                <FaStar className="assessments" color="#F5C518"/>
                8,8 <FaRegStar className="assess" />
              </div>
              <p className="title">Título do filme</p>
              <div className="knowMore">
                <MdLocalMovies /> Saiba mais
              </div>
            </div>
          </div>
          <div className="movie">
            <img src="https://i.pinimg.com/236x/ff/86/d2/ff86d2a1214f4fbf35b39c4a0a5e00c4.jpg"></img>
            <div className="infosMovie">
              <div className="avaliation">
                <FaStar className="assessments" color="#F5C518"/>
                8,8 <FaRegStar className="assess" />
              </div>
              <p className="title">Título do filme</p>
              <div className="knowMore">
                <MdLocalMovies /> Saiba mais
              </div>
            </div>
          </div>
          <div className="movie">
            <img src="https://i.pinimg.com/236x/ff/86/d2/ff86d2a1214f4fbf35b39c4a0a5e00c4.jpg"></img>
            <div className="infosMovie">
              <div className="avaliation">
                <FaStar className="assessments" color="#F5C518"/>
                8,8 <FaRegStar className="assess" />
              </div>
              <p className="title">Título do filme</p>
              <div className="knowMore">
                <MdLocalMovies /> Saiba mais
              </div>
            </div>
          </div>
          <div className="movie">
            <img src="https://i.pinimg.com/236x/ff/86/d2/ff86d2a1214f4fbf35b39c4a0a5e00c4.jpg"></img>
            <div className="infosMovie">
              <div className="avaliation">
                <FaStar className="assessments" color="#F5C518"/>
                8,8 <FaRegStar className="assess" />
              </div>
              <p className="title">Título do filme</p>
              <div className="knowMore">
                <MdLocalMovies /> Saiba mais
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  overflow-x: hidden;
  flex-direction: column;
  width: 100%;
  .titleSetion{
    margin-bottom: 20px;
    padding-left: 10px;
    border-left: 3px solid #F5C518;
  }
  .movies {
    display: flex;
  }
  .movie{
  cursor: pointer;
    margin-right: 30px;
    img{
      width: 190px;
    }
  }
  .titleSetion {
    font-size: 20px;
  }

  .infosMovie {
    background-color: #1a1a1a;
    padding: 10px;
    .avaliation {
        margin-bottom: 15px;
      display: flex;
      .assessments {
        margin-right: 10px;
      }
      .assess {
        margin-left: 15px;
      }
      
    }
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
