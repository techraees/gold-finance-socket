// colorModel.js

import mongoose from 'mongoose';

const colorSchema = new mongoose.Schema({
  bgColor: { type: String, required: true },
  textColor: { type: String, required: true }
});

const Color = mongoose.model('Color', colorSchema);

export default Color;
