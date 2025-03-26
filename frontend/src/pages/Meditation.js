import React, { useState, useEffect } from 'react';
import { Container, Button, Card, Row, Col } from 'react-bootstrap';

const Meditation = () => {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0);
  const [selectedDuration, setSelectedDuration] = useState(300);

  // YouTube video links and their descriptions
  const meditationVideos = [
    {
      title: "5-Minute Meditation for Beginners",
      url: "https://www.youtube.com/embed/VpHz8Mb13_Y",
      duration: "5 mins",
      description: "Perfect for beginners to start their meditation journey"
    },
    {
      title: "10-Minute Mindfulness Meditation",
      url: "https://www.youtube.com/embed/ZToicYcHIOU",
      duration: "10 mins",
      description: "Guided meditation for stress relief and relaxation"
    },
    {
      title: "30-Minute Deep Meditation",
      url: "https://www.youtube.com/embed/WZKW2Hq2fks",
      duration: "30 mins",
      description: "Deep meditation session for experienced practitioners"
    }
  ];

  useEffect(() => {
    let interval = null;
    if (isActive && time < selectedDuration) {
      interval = setInterval(() => {
        setTime(time => time + 1);
      }, 1000);
    } else if (time >= selectedDuration) {
      endSession();
    }
    return () => clearInterval(interval);
  }, [isActive, time, selectedDuration]);

  const startSession = () => {
    setIsActive(true);
    setTime(0);
  };

  const endSession = () => {
    setIsActive(false);
    setTime(0);
  };

  const pauseSession = () => {
    setIsActive(false);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <Container className="meditation-page">
      {/* Guided Meditation Videos Section */}
      <h2 className="text-center mb-4">Guided Meditation Videos</h2>
      <Row className="mb-5">
        {meditationVideos.map((video, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="meditation-video-card h-100">
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  src={video.url}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <Card.Body>
                <Card.Title>{video.title}</Card.Title>
                <Card.Text>
                  <small className="text-muted">Duration: {video.duration}</small>
                  <br />
                  {video.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Timer Section */}
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="meditation-timer-card">
            <Card.Header>
              <h3 className="text-center mb-0">Meditation Timer</h3>
            </Card.Header>
            <Card.Body>
              <div className="timer-controls">
                <div className="duration-buttons mb-3">
                  <Button 
                    variant="outline-primary" 
                    size="sm"
                    className="mx-2"
                    onClick={() => setSelectedDuration(300)}
                    disabled={isActive}
                  >
                    5 Min
                  </Button>
                  <Button 
                    variant="outline-primary"
                    size="sm"
                    className="mx-2"
                    onClick={() => setSelectedDuration(600)}
                    disabled={isActive}
                  >
                    10 Min
                  </Button>
                  <Button 
                    variant="outline-primary"
                    size="sm"
                    className="mx-2"
                    onClick={() => setSelectedDuration(900)}
                    disabled={isActive}
                  >
                    15 Min
                  </Button>
                </div>

                <div className="time-display text-center mb-3">
                  {formatTime(time)} / {formatTime(selectedDuration)}
                </div>

                <div className="control-buttons text-center">
                  {!isActive ? (
                    <Button 
                      variant="success" 
                      size="sm" 
                      onClick={startSession}
                      className="mx-2"
                    >
                      Start
                    </Button>
                  ) : (
                    <>
                      <Button 
                        variant="warning" 
                        size="sm" 
                        onClick={pauseSession}
                        className="mx-2"
                      >
                        Pause
                      </Button>
                      <Button 
                        variant="danger" 
                        size="sm" 
                        onClick={endSession}
                        className="mx-2"
                      >
                        End
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Meditation;
