import React, { useState, useEffect } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import '../styles/BreathingExercises.css';

const BreathingExercises = () => {
  const [phase, setPhase] = useState('inhale');
  const [timer, setTimer] = useState(4);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer === 1) {
            // Switch phases when timer reaches 1
            switch (phase) {
              case 'inhale':
                setPhase('hold');
                return 4; // Hold for 4 seconds
              case 'hold':
                setPhase('exhale');
                return 6; // Exhale for 6 seconds
              case 'exhale':
                setPhase('rest');
                return 4; // Rest for 4 seconds
              case 'rest':
                setPhase('inhale');
                return 4; // Back to inhale for 4 seconds
              default:
                return 4;
            }
          }
          return prevTimer - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [phase, isActive]);

  const handleReset = () => {
    setPhase('inhale');
    setTimer(4);
    setIsActive(true);
  };

  const toggleExercise = () => {
    setIsActive(!isActive);
  };

  return (
    <Container className="breathing-container">
      <Card className="breathing-card">
        <Card.Body>
          <div className={`breathing-circle ${phase}`}>
            <div className="phase-text">{phase.toUpperCase()}</div>
            <div className="timer">{timer}s</div>
          </div>
          <div className="instructions">
            <p>Follow the breathing phases:</p>
            <ul>
              <li><strong>Inhale:</strong> Breathe in deeply for 4 seconds.</li>
              <li><strong>Hold:</strong> Hold your breath for 4 seconds.</li>
              <li><strong>Exhale:</strong> Breathe out slowly for 6 seconds.</li>
              <li><strong>Rest:</strong> Relax for 4 seconds before the next cycle.</li>
            </ul>
          </div>
          <div className="controls text-center">
            <Button
              variant="primary"
              className="mx-2"
              onClick={toggleExercise}
            >
              {isActive ? 'Pause' : 'Resume'}
            </Button>
            <Button
              variant="secondary"
              className="mx-2"
              onClick={handleReset}
            >
              Restart
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default BreathingExercises;
