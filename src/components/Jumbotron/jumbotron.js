import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import Picture from "../../assets/puget-sound.jpeg";


function PictureBackDrop() {
  return (
    <>
    <Jumbotron style={{ backgroundImage: `url(${Picture})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '60vh'}} fluid>
        <Container>
            <h1>Serving all your Notary needs in King, Pierce, and Kitsap counties</h1>
        </Container>
    </Jumbotron>
    </>
  );
}

export default PictureBackDrop;
