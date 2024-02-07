import Navbar from "./../Model/navbarSchema.js";

export const getNavbarItems = async (req, res) => {
  try {
    const navItems = await Navbar.find();
    res.json(navItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createNavbarItem = async (req, res) => {
  const { label, link } = req.body;
  const newItem = new Navbar({ label, link });

  try {
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateNavbarItem = async (req, res) => {
  const { id } = req.params;
  const { label, link } = req.body;

  try {
    const updatedItem = await Navbar.findByIdAndUpdate(
      id,
      { label, link },
      { new: true }
    );
    res.json(updatedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteNavbarItem = async (req, res) => {
  const { id } = req.params;

  try {
    await Navbar.findByIdAndDelete(id);
    res.json({ message: "Navbar item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
