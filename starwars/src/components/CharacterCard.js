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
background-image: linear-gradient(to bottom right,rgb(246,170,84),rgb(208,136,10, .03));
color:rgb(164,87,48);

`;

const CharacterCard= props =>{

    return(

        <Container key ={props.index}>
                <h1>{props.name}</h1>
<p>                Height: {props.height}
 </p><p>           Weight: {props.mass}
</p>
        </Container>
        
     
    )
}

export default CharacterCard;