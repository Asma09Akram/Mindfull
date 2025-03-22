import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Container>
        <Row className="mb-5 text-center">
          <Col>
            <h1 className="display-4 mb-4 fade-in">Welcome to Mindful Me</h1>
            <p className="lead fade-in">Your journey to inner peace starts here</p>
          </Col>
        </Row>

        <Row className="features-section">
          <Col md={4} className="mb-4">
            <Card className="h-100 fade-in">
              <Card.Body>
                <Card.Title>Mindfulness Practice</Card.Title>
                <Card.Text>
                  Learn to live in the present moment and develop a deeper awareness of your thoughts and feelings.
                </Card.Text>
                <Link to="/mindfulness" className="btn btn-primary">Start Practice</Link>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="h-100 fade-in">
              <Card.Body>
                <Card.Title>Breathing Exercises</Card.Title>
                <Card.Text>
                  Discover powerful breathing techniques to reduce stress and anxiety instantly.
                </Card.Text>
                <Link to="/breathing" className="btn btn-primary">Try Breathing</Link>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4} className="mb-4">
            <Card className="h-100 fade-in">
              <Card.Body>
                <Card.Title>Meditation</Card.Title>
                <Card.Text>
                  Access guided meditation sessions to help you find peace and clarity.
                </Card.Text>
                <Link to="/meditation" className="btn btn-primary">Meditate Now</Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col className="text-center">
            <h2>Begin Your Journey Today</h2>
            <p>Join thousands of others who have discovered the power of mindfulness</p>
            <Link to="/register" className="btn btn-lg btn-primary me-3">Sign Up</Link>
            <Link to="/login" className="btn btn-lg btn-outline-primary">Login</Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;