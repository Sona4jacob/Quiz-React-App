import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Quiz from '../components/Quiz';

function Home() {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={6} md={12} className='mt-4'>
            <img
              className='img-fluid'
              style={{ width: '100%' }}
              src="https://i.pinimg.com/564x/8e/3c/df/8e3cdf267405d133b5c5337941c0fb8c.jpg"
              alt=""
            />
          </Col>
          <Col lg={6} md={12} className='mt-4'>
            <h1 className='text-center mt-5'>Ready For a Quiz !</h1>
            <p className='lead text-center pt-5'>
              Test your knowledge and challenge yourself with our exciting quizzes. QuizzyMind offers a variety of quizzes on different topics, from programming to general knowledge. Sharpen your mind and have fun.
            </p>
          </Col>
        </Row>

        <div className='mt-3'>
          <h1 className='text-center'>TAKE YOUR QUIZ</h1>
          <p className='text-center ps-5 pe-5 pt-2'>
            Get started by clicking on the "Take Quiz" button below and see how many questions you can answer correctly. Challenge your friends and compete for the top score!
          </p>

          <Quiz />
        </div>
      </Container>
    </div>
  );
}

export default Home;
