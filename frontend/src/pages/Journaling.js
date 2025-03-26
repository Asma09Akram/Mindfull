
/*
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';
import '../styles/Journaling.css';

const moodOptions = [
  'Very Happy', 'Happy', 'Neutral', 'Sad', 'Very Sad',
  'Anxious', 'Calm', 'Energetic', 'Tired', 'Stressed'
];

const Journaling = () => {
  const [entries, setEntries] = useState([]);
  const [currentMood, setCurrentMood] = useState('');
  const [notes, setNotes] = useState('');
  const { currentUser } = useAuth();

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const response = await axios.get('/api/users/journal-entries', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setEntries(response.data);
    } catch (error) {
      console.error('Error fetching journal entries:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/users/journal-entries', {
        mood: currentMood,
        notes,
        date: new Date()
      }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setCurrentMood('');
      setNotes('');
      fetchEntries();
    } catch (error) {
      console.error('Error saving journal entry:', error);
    }
  };

  return (
    <Container className="journaling-page">
      <h1 className="text-center mb-5 fade-in">Mindfulness Journal</h1>
      
      <Row>
        <Col md={8} className="mb-4">
          <Card className="journal-card">
            <Card.Body>
              <h2 className="mb-4">New Entry</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-4">
                  <Form.Label>How are you feeling today?</Form.Label>
                  <Form.Select 
                    value={currentMood}
                    onChange={(e) => setCurrentMood(e.target.value)}
                    required
                  >
                    <option value="">Select your mood</option>
                    {moodOptions.map((mood) => (
                      <option key={mood} value={mood}>{mood}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
                
                <Form.Group className="mb-4">
                  <Form.Label>Reflect on your day</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="What's on your mind? How did your meditation practice go?"
                    required
                  />
                </Form.Group>
                
                <Button type="submit" variant="primary" className="w-100">
                  Save Entry
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        
        <Col md={4}>
          <Card className="history-card">
            <Card.Body>
              <h2 className="mb-4">Recent Entries</h2>
              {entries.map((entry, index) => (
                <div key={index} className="entry-item mb-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">
                      {new Date(entry.date).toLocaleDateString()}
                    </small>
                    <span className="mood-badge">{entry.mood}</span>
                  </div>
                  <p className="entry-notes mt-2">{entry.notes}</p>
                  <hr />
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Journaling;
*/


import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';

const Journaling = () => {
  const [entry, setEntry] = useState({
    title: '',
    content: '',
    mood: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:5000/api/users/journal-entries',
        entry,
        {
          headers: {
            'Content-Type': 'application/json',
            // Add authorization header if needed
            // 'Authorization': `Bearer ${yourAuthToken}`
          }
        }
      );
      console.log('Journal entry saved:', response.data);
      // Clear form after successful submission
      setEntry({ title: '', content: '', mood: '' });
    } catch (error) {
      console.error('Error saving journal entry:', error);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={entry.title}
            onChange={(e) => setEntry({...entry, title: e.target.value})}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={entry.content}
            onChange={(e) => setEntry({...entry, content: e.target.value})}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Mood</Form.Label>
          <Form.Control
            type="text"
            value={entry.mood}
            onChange={(e) => setEntry({...entry, mood: e.target.value})}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Save Entry
        </Button>
      </Form>
    </Container>
  );
};

export default Journaling;
