const mongoose = require('mongoose');

const enquirySchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    message: { type: String, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Enquiry', enquirySchema);