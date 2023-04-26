import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Figure from 'react-bootstrap/Figure';
import Typewriter from 'typewriter-effect';


export default function HomePage() {


  return (
    <div>
      <h1 >Let me bring <i> <Typewriter
        options={{
          strings: ['perfection', 'speed', 'quality', "value"],
          autoStart: true,
          loop: true,
        }}
      /></i> to your project!! </h1>
      <Container>
        <Row  >
          <Col>
            <div className='image-container'>
              <Figure >
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
    </div>
  )
}