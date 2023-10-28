import React from "react";
import styled from "styled-components";


const QuotesContainer = styled.section`
   padding : 20px;
   background-color: #fff;
   text-align: center;
   font-size: 20px;
   font-weight: bold;
`

function QuotesSection(){
    return(
        <QuotesContainer>
            <blockquote>
                "Isso é o que ela disse " - Michael Scott
            </blockquote>
        </QuotesContainer>
    )
}

export default QuotesSection