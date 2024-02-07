// colorRoutes.js

import express from 'express';
import { getColors, updateColors, createColors } from '../controller/colorController.js';

const router = express.Router();

// Route for fetching colors
router.get('/', getColors);

// Route for updating colors
router.put('/', updateColors);

// Route for creating colors
router.post('/', createColors);

export default router;
