const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');

// @route   POST api/contact
// @desc    Save contact form data
// @access  Public
router.post('/', async (req, res) => {
  const { name, email, contactNumber, message } = req.body;

  if (!name || !email || !contactNumber || !message) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  const newContact = new Contact({
    name,
    email,
    contactNumber,
    message,
  });

  try {
    const savedContact = await newContact.save();
    res.json(savedContact);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
