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
