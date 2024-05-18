const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petSchema = new mongoose.Schema({
  nickname: { type: String, required: true },
  species: { type: String, required: true },
  breed: { type: String },
  age: { type: Number },
  gender: { type: String },
  weight: { type: Number },
  ownerId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  vaccinationStatus: { type: String },
  medicalHistory: { type: String },
  dietaryRequirements: { type: String },
  behavioralNotes: { type: String },
  adoptionDate: { type: Date },
  insurancePolicyNumber: { type: String },
  longitude: { type: Number },
  latitude: { type: Number },
  photos: [{link: {type: String}, title: {type: String}}],
  isActive: { type: Boolean, default: true },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;
