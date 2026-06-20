const express = require('express');
const Enquiry = require('../models/Enquiry');

const router = express.Router();

const REQUIRED_FIELDS = ['firstName', 'lastName', 'email', 'phone'];

function validateEnquiry(body) {
  const errors = [];

  for (const field of REQUIRED_FIELDS) {
    const value = body[field];
    if (value === undefined || value === null || String(value).trim() === '') {
      errors.push(`${field} is required`);
    }
  }

  if (body.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email)) {
    errors.push('email must be valid');
  }

  return errors;
}

router.post('/', async (req, res) => {
  const errors = validateEnquiry(req.body);

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Validation failed',
      errors,
    });
  }

  try {
    const enquiry = await Enquiry.create({
      firstName: req.body.firstName.trim(),
      lastName: req.body.lastName.trim(),
      email: req.body.email.trim().toLowerCase(),
      phone: req.body.phone.trim(),
      message: req.body.message?.trim(),
    });

    return res.status(201).json({
      success: true,
      message: 'Enquiry submitted successfully',
      data: { id: enquiry._id },
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
});

module.exports = router;