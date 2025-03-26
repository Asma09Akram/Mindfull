import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/Mindfulness.css';

const mindfulnessQuotes = [
  {
    quote: "The present moment is the only time over which we have dominion.",
    author: "Thích Nhất Hạnh"
  },
  {
    quote: "Mindfulness isn't difficult, we just need to remember to do it.",
    author: "Sharon Salzberg"
  },
  {
    quote: "The mind is everything. What you think you become.",
    author: "Buddha"
  }
];

const beginnerTips = [
  {
    title: "Start Small",
    description: "Begin with just 5 minutes of mindfulness practice each day. Gradually increase the duration as you become more comfortable."
  },
  {
    title: "Focus on Breath",
    description: "Use your breath as an anchor. Notice the sensation of breathing in and out."
  },
  {
    title: "Be Kind to Yourself",
    description: "When your mind wanders, gently bring it back to the present moment without judgment."
  }
];

const Mindfulness = () => {
  return (
    <Container className="mindfulness-page">
      {/* Page Header */}
      <header className="text-center mb-5">
        <h1 className="fade-in">Mindfulness Practice</h1>
        <p className="lead">Cultivate mindfulness and embrace the present moment.</p>
      </header>

      {/* Quote Section */}
      <section className="quote-section mb-5">
        <Row>
          <Col lg={8} className="mx-auto">
            <Card className="quote-card fade-in shadow-sm">
              <Card.Body>
                <blockquote className="blockquote mb-0 text-center">
                  <p className="mb-3">"{mindfulnessQuotes[0].quote}"</p>
                  <footer className="blockquote-footer">
                    <cite>{mindfulnessQuotes[0].author}</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      {/* Beginner Tips Section */}
      <section className="tips-section mb-5">
        <h2 className="text-center mb-4">Getting Started with Mindfulness</h2>
        <Row>
          {beginnerTips.map((tip, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="h-100 tip-card fade-in shadow-sm">
                <Card.Body>
                  <Card.Title className="text-primary">{tip.title}</Card.Title>
                  <Card.Text>{tip.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* Daily Exercise Section */}
      <section className="exercise-section">
        <Row>
          <Col lg={8} className="mx-auto">
            <Card className="practice-card shadow-sm">
              <Card.Body>
                <h3 className="text-center mb-4">Daily Mindfulness Exercise</h3>
                <p>Find a comfortable position and follow these steps:</p>
                <ul className="list-unstyled">
                  <li>1. Take a deep breath in through your nose (4 seconds)</li>
                  <li>2. Hold your breath (4 seconds)</li>
                  <li>3. Exhale slowly through your mouth (6 seconds)</li>
                  <li>4. Notice how your body feels</li>
                  <li>5. Repeat this cycle 5 times</li>
                </ul>
                <div className="text-center mt-4">
                  <div className="breathing-circle breathe-animation"></div>
                  <p className="mt-3">Follow the circle's rhythm</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>
    </Container>
  );
};

export default Mindfulness;

