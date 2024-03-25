import styled from "styled-components"
import ImageCarousel from "../../components/home/imageCarousel"
import RecommendedMovies from "../../components/home/recommendedMovies"

export default function HomePage(){
    return(
        <>
            <Container>
                <ImageCarousel/>
                <Divider/>
                <RecommendedMovies/>
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
`

const Divider = styled.div`
height: 50px;
`