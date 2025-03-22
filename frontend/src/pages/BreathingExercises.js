import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../styles/BreathingExercises.css';

const breathingExercises = [
  {
    name: "Box Breathing",
    description: "Inhale, hold, exhale, and hold, each for 4 counts",
    inhaleDuration: 4,
    holdDuration: 4,
    exhaleDuration: 4,
    pauseDuration: 4
  },
  {
    name: "4-7-8 Breathing",
    description: "Inhale for 4, hold for 7, exhale for 8",
    inhaleDuration: 4,
    holdDuration: 7,
    exhaleDuration: 8,
    pauseDuration: 0
  },
  {
    name: "Deep Calm Breathing",
    description: "Long inhale and exhale with natural pauses",
    inhaleDuration: 6,
    holdDuration: 2,
    exhaleDuration: 6,
    pauseDuration: 2
  }
];

const BreathingExercises = () => {
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [isExercising, setIsExercising] = useState(false);
  const [phase, setPhase] = useState('ready');
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let timer;
    if (isExercising && selectedExercise) {
      timer = setInterval(() => {
        if (phase === 'inhale' && counter >= selectedExercise.inhaleDuration) {
          setPhase('hold');
          setCounter(0);
        } else if (phase === 'hold' && counter >= selectedExercise.holdDuration) {
          setPhase('exhale');
          setCounter(0);
        } else if (phase === 'exhale' && counter >= selectedExercise.exhaleDuration) {
          setPhase('pause');
          setCounter(0);
        } else if (phase === 'pause' && counter >= selectedExercise.pauseDuration) {
          setPhase('inhale');
          setCounter(0);
        } else {
          setCounter(prev => prev + 1);
        }
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isExercising, selectedExercise, phase, counter]);

  const startExercise = (exercise) => {
    setSelectedExercise(exercise);
    setIsExercising(true);
    setPhase('inhale');
    setCounter(0);
  };

  const stopExercise = () => {
    setIsExercising(false);
    setPhase('ready');
    setCounter(0);
  };

  return (
    <Container className="breathing-page">
      <h1 className="text-center mb-5 fade-in">Breathing Exercises</h1>

      {!isExercising ? (
        <Row>
          {breathingExercises.map((exercise, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="h-100 exercise-card fade-in">
                <Card.Body>
                  <Card.Title>{exercise.name}</Card.Title>
                  <Card.Text>{exercise.description}</Card.Text>
                  <Button 
                    variant="primary" 
                    onClick={() => startExercise(exercise)}
                    className="w-100"
                  >
                    Start Exercise
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="exercise-active-card">
              <Card.Body className="text-center">
                <h2>{selectedExercise.name}</h2>
                <div className="breathing-circle breathe-animation">
                  <div className="phase-text">{phase.toUpperCase()}</div>
                  <div className="counter">{counter}</div>
                </div>
                <Button 
                  variant="secondary" 
                  onClick={stopExercise}
                  className="mt-4"
                >
                  End Exercise
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default BreathingExercises;