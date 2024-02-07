// colorController.js

import Color from './../Model/colorSchema.js';

export const getColors = async (req, res) => {
  try {
    const colors = await Color.findOne();
    res.json(colors);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch colors' });
  }
};

export const updateColors = async (req, res) => {
  const { bgColor, textColor } = req.body;
  try {
    const colors = await Color.findOneAndUpdate({}, { bgColor, textColor }, { new: true, upsert: true });
    res.json(colors);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update colors' });
  }
};

export const createColors = async (req, res) => {
  const { bgColor, textColor } = req.body;
  try {
    const colors = await Color.create({ bgColor, textColor });
    res.json(colors);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create colors' });
  }
};
