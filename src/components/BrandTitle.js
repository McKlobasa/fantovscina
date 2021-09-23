import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 40rem;
`
const Title = styled.h1`
    color: white;
    font-size: 40px;
    font-weight: bold;
    text-shadow: -2px 2px 0px #00FF47, 2px -2px 0px #FF00F5;
    transform: rotate(-8.6deg);
`

const BrandTitle = props => {
    return(
        <Container>
            <Title>fantovscina.si</Title>
        </Container>
    )
}
export default BrandTitle
