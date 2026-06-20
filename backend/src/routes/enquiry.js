const express = require('express');
const Enquiry = require('../models/Enquiry');

const router = express.Router();

const REQUIRED_FIELDS = ['studentName', 'parentName', 'email', 'phone', 'age'];

function normalizeEnquiry(body) {
  return {
    studentName: body.studentName ?? body.firstName,
    parentName: body.parentName ?? body.lastName,
    email: body.email,
    phone: body.phone,
    age: body.age,
    message: body.message,
  };
}

function validateEnquiry(body) {
  const errors = [];

  const enquiry = normalizeEnquiry(body);

  for (const field of REQUIRED_FIELDS) {
    const value = enquiry[field];
    if (value === undefined || value === null || String(value).trim() === '') {
      errors.push(`${field} is required`);
    }
  }

  if (enquiry.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(enquiry.email)) {
    errors.push('email must be valid');
  }

  if (enquiry.age) {
    const age = Number(enquiry.age);

    if (!Number.isInteger(age) || age < 1 || age > 18) {
      errors.push('age must be a whole number between 1 and 18');
    }
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
    const enquiryBody = normalizeEnquiry(req.body);

    const enquiry = await Enquiry.create({
      studentName: enquiryBody.studentName.trim(),
      parentName: enquiryBody.parentName.trim(),
      email: enquiryBody.email.trim().toLowerCase(),
      phone: enquiryBody.phone.trim(),
      age: Number(enquiryBody.age),
      message: enquiryBody.message?.trim(),
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
