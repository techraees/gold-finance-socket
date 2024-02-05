const express = require('express');
const router = express.Router();
const authController = require('./../controller/jewellerController');
const multer = require('multer');

// Multer storage configuration for uploading GST files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/'); // Destination folder where files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Unique filename
  }
});

const upload = multer({ storage: storage });

// Signup route with multer middleware for file upload
router.post('/signup', upload.single('gstFile'), authController.signup);

// Login route
router.post('/login', authController.login);

module.exports = router;
