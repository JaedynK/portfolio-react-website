import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import Typewriter from 'typewriter-effect';

export default function AboutPage(){

    return(
        <div className='skillContainer'>
        <h1>A Quick Fly Over</h1>
        <p className='aboutPage'>I have skills in several programming languages including CSS, HTML, Python, and JavaScript, with experience in libraries and frameworks such as React.js, Bootstrap, REST API's, FastAPI, and Docker. In addition, I have expertise in databases and other tools including Git, GitHub, PostgreSQL, Visual Studio Code, and Object-Oriented Programming.</p>
        <Container className='allRotate' >
          <Row>
            <Col className='rotate' md={{ span: 6, offset: 3 }}><Figure.Image
              width="70"
              height="70"
              src='/images/react.svg'
            /></Col>
          </Row>
          <Row>
            <Col className='rotate' md={{ span: 3, offset: 2 }}><Figure.Image
              width="70"
              height="70"
              src='/images/git.svg'
            /></Col>
            <Col className='rotate' md={{ span: 3, offset: 2 }}><Figure.Image
              width="70"
              height="70"
              src='/images/github.svg'
            /></Col>
          </Row>
          <Row>
            <Col className='rotate' md={{ span: 2, offset: 1 }}>
              <Figure.Image
                width="70"
                height="70"
                src='/images/html5.svg'
              />
            </Col>
            <Col className='rotate' md={{ span: 2, offset: 2 }}>
              <Figure.Image
                width="70"
                height="70"
                src='/images/database-solid.svg'
              />
            </Col>
            <Col className='rotate' md={{ span: 2, offset: 3 }}><Figure.Image
              width="70"
              height="70"
              src='/images/css3-alt.svg'
            /></Col>
          </Row>
          <Row>
            <Col className='rotate' md={{ span: 3, offset: 2 }}><Figure.Image
              width="70"
              height="70"
              src='/images/square-js.svg'
            /></Col>
            <Col className='rotate' md={{ span: 3, offset: 2 }}><Figure.Image
              width="70"
              height="70"
              src='/images/python.svg'
            /></Col>
          </Row>
          <Row>
            <Col className='rotate' md={{ span: 6, offset: 3 }}><Figure.Image
              width="70"
              height="70"
              src='/images/docker.svg'
            /></Col>
          </Row>
        </Container>
      </div>
    )
}