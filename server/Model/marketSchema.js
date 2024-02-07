// schemas/MarketSchema.js
import mongoose from 'mongoose';

const marketSchema = new mongoose.Schema({
    gold: String,
  goldImg: String,
  silver: String,
  silverImg: String

});

const Market = mongoose.model('Market', marketSchema);

export default Market;
