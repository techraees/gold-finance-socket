// routes/userRoutes.js

import express from 'express';
import { register, login } from './../controller/userController.js';

const router = express.Router();

// Register endpoint
router.post('/register', register);

// Login endpoint
router.post('/login', login);

export default router;
