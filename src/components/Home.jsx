import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import Typewriter from 'typewriter-effect';

export default function HomePage() {



  return (
    <div>
      <h1 >Let me bring <Typewriter
        options={{
          strings: ['perfection', 'speed', 'gusto', 'quality', "value"],
          autoStart: true,
          loop: true,
        }}
      /> to your project!! </h1>
      <Container>
        <Row  >
          <Col>
            <div className='image-container'>
              <Figure>
                <Figure.Image
                  width="500"
                  height="500"
                  src='/images/me.JPG'
                />
              </Figure>
            </div>
          </Col>
          <Col >
            <div className='basicText'>
              As a Full Stack Software Engineer and United State Air Force Veteran
              I bring a unique set of skills and expertise to any project.

            </div>
          </Col>
        </Row>
      </Container>
      <div className='skillContainer'>
      <Container>
      <Row>
        <Col md={{ span: 4, offset: 4 }}><Figure.Image
                  width="100"
                  height="100"
                  src='/images/react.svg'
                  /></Col>
      </Row>
      <Row>
        <Col md={{ span: 4, offset: 1}}><Figure.Image
                  width="100"
                  height="100"
                  src='/images/git.svg'
                  /></Col>
            <Col md={{ span: 4, offset: 2 }}><Figure.Image
                  width="100"
                  height="100"
                  src='/images/github.svg'
                  /></Col>
      </Row>
      <Row>
        <Col md={{ span: 4 }}>
          <Figure.Image
                  width="100"
                  height="100"
                  src='/images/html5.svg'
                  />
        </Col>
        <Col md={{ span: 4, offset: 4 }}><Figure.Image
                  width="100"
                  height="100"
                  src='/images/css3-alt.svg'
                  /></Col>
      </Row>
      <Row>
        <Col md={{ span: 3, offset: 2 }}><Figure.Image
                  width="100"
                  height="100"
                  src='/images/square-js.svg'
                /></Col>
        <Col md={{ span: 3, offset: 2 }}><Figure.Image
                  width="100"
                  height="100"
                  src='/images/python.svg'
                /></Col>
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 3 }}><Figure.Image
                  width="100"
                  height="100"
                  src='/images/docker.svg'
                  /></Col>
      </Row>
      <Row>
        <Col md={{ span: 3, }}><Figure.Image
                  width="300"
                  height="300"
                  src='/images/fastapi.png'
                /></Col>
        <Col md={{ span: 3, offset: 6 }}><Figure.Image
                  width="300"
                  height="200"
                  src='/images/django.png'
                /></Col>
      </Row>
    </Container>
    </div>
    </div>
  )
}