
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/Mindfulness.css';

// Define the quotes array
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

// Define the tips array
const beginnerTips = [
  {
    title: "Start Small",
    description: "Begin with just 5 minutes of mindfulness practice each day. Gradually increase the duration as you become more comfortable."
  },
  {
    title: "Affirmation",
    description: "I am safe and surrounded by love and support."
  },
  {
    title: "Be Kind to Yourself",
    description: "When your mind wanders, gently bring it back to the present moment without judgment."
  }
];

// Define color palette
const colorPalette = {
  primary: '#7c4dff',    // Deep Purple
  secondary: '#64b5f6',  // Light Blue
  accent: '#ff7043',     // Deep Orange
  calm: '#81c784',       // Light Green
  serene: '#9575cd',     // Medium Purple
  peaceful: '#4db6ac'    // Teal
};

const Mindfulness = () => {
  // Get a random quote from the array
  const randomQuote = mindfulnessQuotes[Math.floor(Math.random() * mindfulnessQuotes.length)];

  return (
    <Container className="mindfulness-page" style={{ backgroundColor: '#f5f5f5' }}>
      {/* Page Header */}
      <header className="text-center mb-5 header-section">
        <h1 className="fade-in rainbow-text">Mindfulness Practice</h1>
        <p className="lead" style={{ color: colorPalette.primary }}>
          Cultivate mindfulness and embrace the present moment.
        </p>
      </header>

      {/* Quote Section */}
      <section className="quote-section mb-5">
        <Row>
          <Col lg={8} className="mx-auto">
            <Card className="quote-card fade-in shadow-lg gradient-background">
              <Card.Body className="text-white">
                <blockquote className="blockquote mb-0 text-center">
                  <p className="mb-3 quote-text">"{randomQuote.quote}"</p>
                  <footer className="blockquote-footer text-white">
                    <cite>{randomQuote.author}</cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      {/* Beginner Tips Section */}
      <section className="tips-section mb-5">
        <h2 className="text-center mb-4 section-title">Getting Started with Mindfulness</h2>
        <Row>
          {beginnerTips.map((tip, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className={`h-100 tip-card fade-in shadow-hover gradient-card-${index + 1}`}>
                <Card.Body>
                  <Card.Title className="tip-title">{tip.title}</Card.Title>
                  <Card.Text className="tip-text">{tip.description}</Card.Text>
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
            <Card className="practice-card shadow-lg zen-background">
              <Card.Body>
                <h3 className="text-center mb-4 exercise-title">Daily Mindfulness Exercise</h3>
                <p className="exercise-intro">Find a comfortable position and follow these steps:</p>
                <ul className="list-unstyled exercise-steps">
                  <li className="step-item">
                    <span className="step-number">1</span> Take a deep breath in through your nose (4 seconds)
                  </li>
                  <li className="step-item">
                    <span className="step-number">2</span> Hold your breath (4 seconds)
                  </li>
                  <li className="step-item">
                    <span className="step-number">3</span> Exhale slowly through your mouth (6 seconds)
                  </li>
                  <li className="step-item">
                    <span className="step-number">4</span> Notice how your body feels
                  </li>
                  <li className="step-item">
                    <span className="step-number">5</span> Repeat this cycle 5 times
                  </li>
                </ul>
                <div className="text-center mt-4">
                  <div className="breathing-circle breathe-animation"></div>
                  <p className="mt-3 breathing-text">Follow the circle's rhythm</p>
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

