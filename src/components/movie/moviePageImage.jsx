import styled from "styled-components"

export default function MoviePageImage({movieImage}){
    
    return(
        <>
            <Container>
                <img src={movieImage.imagePoster}></img>
            </Container>
        </>
    )
}

const Container = styled.div`

`