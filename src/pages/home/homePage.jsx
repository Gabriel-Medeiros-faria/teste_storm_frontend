import styled from "styled-components"
import ImageCarousel from "../../components/home/imageCarousel"
import RecommendedMovies from "../../components/home/recommendedMovies"
import { useState } from "react"
import RightCarousel from "../../components/home/rightCarousel"

export default function HomePage(){
    const[movies, setMovies] = useState([])
    return(
        <>
            <Container>
                <div className="itemsCarousel">
                <ImageCarousel movies={movies}/>
                <RightCarousel movies={movies}/>
                </div>
                <Divider/>
                <RecommendedMovies setMovies={setMovies} movies={movies}/>
            </Container>
        </>
    )
}

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 0 140px;
.itemsCarousel{
    display: flex;
}
`

const Divider = styled.div`
height: 50px;
`