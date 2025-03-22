import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const { currentUser } = useAuth();
  const [stats, setStats] = useState({
    totalMeditations: 0,
    totalMinutes: 0,
    currentStreak: 0,
    moodStats: []
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get('/api/users/stats', {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });
        setStats(response.data);
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };

    fetchStats();
  }, []);

  return (
    <Container>
      <h1 className="mb-4">Welcome back, {currentUser.name}!</h1>
      
      <Row className="stats-overview">
        <Col md={4} className="mb-4">
          <Card className="stats-card">
            <Card.Body>
              <Card.Title>Total Sessions</Card.Title>
              <h2>{stats.totalMeditations}</h2>
              <Card.Text>meditation sessions completed</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4} className="mb-4">
          <Card className="stats-card">
            <Card.Body>
              <Card.Title>Total Minutes</Card.Title>
              <h2>{stats.totalMinutes}</h2>
              <Card.Text>minutes of mindfulness</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4} className="mb-4">
          <Card className="stats-card">
            <Card.Body>
              <Card.Title>Current Streak</Card.Title>
              <h2>{stats.currentStreak}</h2>
              <Card.Text>days in a row</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col md={8}>
          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Your Mood History</Card.Title>
              <div className="mood-chart">
                {/* Implement mood visualization chart here */}
              </div>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Quick Actions</Card.Title>
              <ul className="list-unstyled">
                <li><a href="/meditation" className="btn btn-primary mb-2 w-100">Start Meditation</a></li>
                <li><a href="/breathing" className="btn btn-outline-primary mb-2 w-100">Breathing Exercise</a></li>
                <li><a href="/mindfulness" className="btn btn-outline-primary w-100">Practice Mindfulness</a></li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;