// controllers/marketController.js
import Market from './../Model/marketSchema.js';

export const getMarketData = async (req, res) => {
  try {
    const marketData = await Market.find();
    res.json(marketData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createMarketEntry = async (req, res) => {
  const { gold, goldImg, silver, silverImg } = req.body;

  try {
    const newMarketEntry = new Market({
      gold,
      goldImg,
      silver,
      silverImg
    });

    const savedEntry = await newMarketEntry.save();
    res.status(201).json(savedEntry);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateMarketEntry = async (req, res) => {
  const { id } = req.params;
  const { gold, goldImg, silver, silverImg } = req.body;

  try {
    const updatedMarketEntry = await Market.findByIdAndUpdate(id, {
      gold,
      goldImg,
      silver,
      silverImg
    }, { new: true });

    res.json(updatedMarketEntry);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
