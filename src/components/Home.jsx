import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import Typewriter from 'typewriter-effect';

export default function HomePage(){

    return(
        <div>
            <h1  className='basicText' >Welcome to my website! </h1>
    <Container>
      <Row md={2} >
        <Col>
        <Figure>
      <Figure.Image
        width={500}
        height={500}
        alt="500x500"
        src= '/public/images/me.JPG'
      />
      </Figure>
        </Col>
        <Col lg={true} className='basicText'>
        <Typewriter
  onInit={(typewriter) => {
    typewriter.typeString(`
    As a Full Stack Software Engineer and Military Veteran 
    with 2+ years of management experience in the US Air Force,
    I bring a unique set of skills and expertise to any project.
    `)
      .callFunction(() => {
        console.log('String typed out!');
      })
      .pauseFor(1000)
      .callFunction(() => {
        console.log('All strings were deleted');
      })
      .start();
    //   .deleteAll()
  }}
/>
        </Col>
      </Row>
      <Row>
        <Col className='basicText'>
        <Typewriter
        options={{
            strings: ['Hello', 'World'],
            autoStart: true,
            loop: false,
        }}
        />
        </Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>
        </div>
    )
}