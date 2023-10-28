import react from "react"
import styled from "styled-components"

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
    margin-top: 20px;
    padding-bottom: 20px;
`
const ImageContainer = styled.section`
    width : 295px;
    height : 394px;
    margin : 0 10px;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
    }
`
const Text = styled.p`
    text-align: center;
    margin: 10px 0;
`
const Button = styled.button`
    display: block;
    margin: 0 auto;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color : #fff;
    cursor: pointer;
`
function ImageText({images}){
    return(
        <Container>
            {images.map((image, index) => (
                <ImageContainer key={index}>
                    <img src={image.src} alt={image.alt}/>
                    <Text>{image.text}</Text>
                    <Button>Saiba Mais</Button>
                </ImageContainer>
            ))}
        </Container>
    )
}

export default ImageText