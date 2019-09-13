import React from "react";
import styled from "styled-components";

const Container = styled.div`
display:flex;
flex-direction:column;
margin: .5%;
width:250px;
height:250px;
border-radius: 12px;
border: 3px solid rgb(208,196,182, 0.3);
text-align:center;
background-image: linear-gradient(to bottom right,rgb(246,170,84),rgb(166,190,212));

color:rgb(164,87,48);
font-family: 'Manjari', sans-serif;



`;

const StarName = styled.h2`
font-size:1.5rem;
font-family: 'Geostar', cursive;
`;

const CharacterCard= props =>{

    return(

        <Container key ={props.index}>
                <StarName>{props.name}</StarName>
<p>                Height: {props.height}
 </p><p>           Weight: {props.mass}
</p>
        </Container>
        
     
    )
}

export default CharacterCard;