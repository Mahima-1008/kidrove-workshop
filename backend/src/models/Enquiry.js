const mongoose = require('mongoose');

const enquirySchema = new mongoose.Schema(
  {
    studentName: { type: String, required: true, trim: true },
    parentName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    age: { type: Number, min: 1, max: 18 },
    message: { type: String, trim: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Enquiry', enquirySchema);
