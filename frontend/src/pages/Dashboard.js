import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
  const { currentUser } = useAuth();
  const [userStats, setUserStats] = useState({
    totalSessions: 0,
    totalMinutes: 0,
    streakDays: 0
  });

  // Sample meditation data
  const meditationHistory = [
    { date: '2025-03-21', duration: 10, type: 'Mindfulness' },
    { date: '2025-03-20', duration: 15, type: 'Breathing' },
    { date: '2025-03-19', duration: 5, type: 'Guided' }
  ];

  return (
    <Container className="dashboard-container py-5">
      {/* Welcome Section */}
      <Row className="mb-4">
        <Col>
          <h1>Welcome, {currentUser?.email || 'Guest'}</h1>
          <p>Track your meditation journey and progress</p>
        </Col>
      </Row>

      {/* Stats Section */}
      <Row className="mb-4">
        <Col md={4}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Total Sessions</Card.Title>
              <Card.Text className="h2">{userStats.totalSessions}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Total Minutes</Card.Title>
              <Card.Text className="h2">{userStats.totalMinutes}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>Current Streak</Card.Title>
              <Card.Text className="h2">{userStats.streakDays} days</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Recent Activity Section */}
      <Row>
        <Col>
          <Card>
            <Card.Header>
              <h3>Recent Meditation Sessions</h3>
            </Card.Header>
            <Card.Body>
              {meditationHistory.length > 0 ? (
                <div className="meditation-history">
                  {meditationHistory.map((session, index) => (
                    <div key={index} className="meditation-session-item">
                      <Row className="align-items-center">
                        <Col xs={4}>
                          <strong>{session.date}</strong>
                        </Col>
                        <Col xs={4}>
                          {session.duration} minutes
                        </Col>
                        <Col xs={4}>
                          {session.type}
                        </Col>
                      </Row>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No meditation sessions recorded yet.</p>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
