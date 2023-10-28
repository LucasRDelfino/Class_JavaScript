import React from "react"
import styled from 'styled-components'

const FooterContainer = styled.footer`
    background-color: #333;
    padding : 40px;
    color: #fff;
    text-align: center;


`;

function Footer(){
    return(
        <FooterContainer>
            @2023 the Office - Dunder Mifflin
        </FooterContainer>
    )
}

export default Footer