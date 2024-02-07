// footerController.js
import Footer from './../Model/footerSchema.js';

// Create a new footer
export const createFooter = async (req, res) => {
  try {
    const {
      logoSrc,
      logoLink,
      description,
      socialMediaLinks,
      usefulLinks,
      services,
      contact,
      copyright
    } = req.body;
    const footer = new Footer({
      logoSrc,
      logoLink,
      description,
      socialMediaLinks,
      usefulLinks,
      services,
      contact,
      copyright
    });
    const savedFooter = await footer.save();
    res.status(201).json(savedFooter);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all footers
export const getFooter = async (req, res) => {
  try {
    const footers = await Footer.find();
    if (!footers || footers.length === 0) {
      res.status(404).json({ message: 'No footers found' });
    } else {
      res.json(footers);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update the single footer
export const updateFooter = async (req, res) => {
  try {
    const footer = await Footer.findOne();
    if (!footer) {
      return res.status(404).json({ message: 'Footer not found' });
    }
    Object.assign(footer, req.body);
    const updatedFooter = await footer.save();
    res.json(updatedFooter);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete the single footer
export const deleteFooter = async (req, res) => {
  try {
    const footer = await Footer.findOne();
    if (!footer) {
      return res.status(404).json({ message: 'Footer not found' });
    }
    await footer.remove();
    res.json({ message: 'Footer deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
