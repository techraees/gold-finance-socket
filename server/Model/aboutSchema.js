// models/About.js
import mongoose from 'mongoose';

const aboutSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  image: {
    type: String, // Assuming you store the image URL as a string
    required: true,
  },
});

const About = mongoose.model('About', aboutSchema);

export default About;
