import React, { useState, useRef, useEffect } from 'react';
import { Container, Row, Col, Card, Button, ProgressBar } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';
import '../styles/Meditation.css';

const meditationSessions = [
  {
    id: 1,
    title: "Mindful Breathing",
    duration: 300, // 5 minutes in seconds
    description: "A gentle introduction to meditation focusing on breath awareness.",
    audioUrl: "/meditations/mindful-breathing.mp3"
  },
  {
    id: 2,
    title: "Body Scan Relaxation",
    duration: 600, // 10 minutes
    description: "Progressive relaxation technique moving through the entire body.",
    audioUrl: "/meditations/body-scan.mp3"
  },
  {
    id: 3,
    title: "Loving Kindness",
    duration: 900, // 15 minutes
    description: "Develop compassion for yourself and others through guided meditation.",
    audioUrl: "/meditations/loving-kindness.mp3"
  }
];

const Meditation = () => {
  const [activeSession, setActiveSession] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const audioRef = useRef(null);
  const { currentUser } = useAuth();

  useEffect(() => {
    let timer;
    if (isPlaying && activeSession) {
      timer = setInterval(() => {
        const current = audioRef.current.currentTime;
        const duration = audioRef.current.duration;
        setProgress((current / duration) * 100);
        setTimeRemaining(Math.ceil(duration - current));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isPlaying, activeSession]);

  const startSession = async (session) => {
    setActiveSession(session);
    audioRef.current.src = session.audioUrl;
    await audioRef.current.play();
    setIsPlaying(true);
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const endSession = async () => {
    try {
      await axios.post('/api/meditation/complete', {
        sessionId: activeSession.id,
        duration: activeSession.duration,
        userId: currentUser.id
      }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
    } catch (error) {
      console.error('Error saving meditation session:', error);
    }

    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setActiveSession(null);
    setIsPlaying(false);
    setProgress(0);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <Container className="meditation-page">
      <h1 className="text-center mb-5 fade-in">Meditation</h1>

      <audio ref={audioRef} onEnded={endSession} />

      {!activeSession ? (
        <Row>
          {meditationSessions.map((session) => (
            <Col md={4} key={session.id} className="mb-4">
              <Card className="h-100 meditation-card fade-in">
                <Card.Body>
                  <Card.Title>{session.title}</Card.Title>
                  <Card.Text>{session.description}</Card.Text>
                  <Card.Text>
                    <small className="text-muted">
                      Duration: {formatTime(session.duration)}
                    </small>
                  </Card.Text>
                  <Button 
                    variant="primary" 
                    onClick={() => startSession(session)}
                    className="w-100"
                  >
                    Start Meditation
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="meditation-active-card">
              <Card.Body className="text-center">
                <h2>{activeSession.title}</h2>
                <ProgressBar 
                  now={progress} 
                  className="my-4"
                />
                <p>Time Remaining: {formatTime(timeRemaining)}</p>
                <div className="d-flex justify-content-center gap-3">
                  <Button 
                    variant="primary"
                    onClick={togglePlayPause}
                  >
                    {isPlaying ? 'Pause' : 'Resume'}
                  </Button>
                  <Button 
                    variant="secondary"
                    onClick={endSession}
                  >
                    End Session
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default Meditation;