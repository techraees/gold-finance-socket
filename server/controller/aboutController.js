// controllers/aboutController.js
import About from "./../Model/aboutSchema.js"; // Update import path if necessary

const aboutController = {
  async getAbout(req, res) {
    try {
      const about = await About.findOne(); // Assuming there's only one About page content
      res.json(about);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  async createAbout(req, res) {
    const { content } = req.body;
    const { image } = req.file; // Assuming you're using multer or similar middleware to handle file uploads
    const about = new About({ content, image: image.path }); // Assuming req.file contains the image
    try {
      const newAbout = await about.save();
      res.status(201).json(newAbout);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  async updateAbout(req, res) {
    const { id } = req.params;
    try {
      let updateFields = { ...req.body };
      if (req.file) {
        updateFields.image = req.file.path;
      }
      const updatedAbout = await About.findByIdAndUpdate(id, updateFields, { new: true });
      res.json(updatedAbout);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },

  async deleteAbout(req, res) {
    const { id } = req.params;
    try {
      await About.findByIdAndDelete(id);
      res.json({ message: 'About page content deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};

export default aboutController;
