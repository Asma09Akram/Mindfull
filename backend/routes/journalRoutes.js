// backend/routes/journalRoutes.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth'); // If you have authentication middleware
const JournalEntry = require('../models/JournalEntry');

// Get all journal entries
router.get('/journal-entries', auth, async (req, res) => {
  try {
    const entries = await JournalEntry.find({ userId: req.user.id });
    res.json(entries);
  } catch (error) {
    console.error('Error fetching journal entries:', error);
    res.status(500).json({ message: error.message });
  }
});

// POST route to create a new journal entry
router.post('/journal-entries', auth, async (req, res) => {
  try {
    const { title, content, mood } = req.body;
    
    const newEntry = new JournalEntry({
      userId: req.user.id,
      title,
      content,
      mood,
      date: new Date()
    });

    const savedEntry = await newEntry.save();
    res.status(201).json(savedEntry);
  } catch (error) {
    console.error('Error saving journal entry:', error);
    res.status(400).json({ message: 'Error saving journal entry' });
  }
});

// Update a journal entry
router.put('/journal-entries/:id', auth, async (req, res) => {
  try {
    const { title, content, mood } = req.body;
    const updatedEntry = await JournalEntry.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id },
      { title, content, mood },
      { new: true }
    );
    
    if (!updatedEntry) {
      return res.status(404).json({ message: 'Journal entry not found' });
    }
    
    res.json(updatedEntry);
  } catch (error) {
    console.error('Error updating journal entry:', error);
    res.status(400).json({ message: 'Error updating journal entry' });
  }
});

// Delete a journal entry
router.delete('/journal-entries/:id', auth, async (req, res) => {
  try {
    const deletedEntry = await JournalEntry.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.id
    });

    if (!deletedEntry) {
      return res.status(404).json({ message: 'Journal entry not found' });
    }

    res.json({ message: 'Journal entry deleted successfully' });
  } catch (error) {
    console.error('Error deleting journal entry:', error);
    res.status(500).json({ message: 'Error deleting journal entry' });
  }
});

// Get a specific journal entry
router.get('/journal-entries/:id', auth, async (req, res) => {
  try {
    const entry = await JournalEntry.findOne({
      _id: req.params.id,
      userId: req.user.id
    });

    if (!entry) {
      return res.status(404).json({ message: 'Journal entry not found' });
    }

    res.json(entry);
  } catch (error) {
    console.error('Error fetching journal entry:', error);
    res.status(500).json({ message: 'Error fetching journal entry' });
  }
});

module.exports = router;
