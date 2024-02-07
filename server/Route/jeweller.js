import express from 'express';
import { signup, login } from './../controller/jewellerController.js';
import multer from 'multer';

const router = express.Router();

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
router.post('/signup', upload.single('gstFile'), signup);

// Login route
router.post('/login', login);

export default router;
