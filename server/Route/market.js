// routes/marketRoutes.js
import express from 'express';
import { getMarketData, createMarketEntry, updateMarketEntry } from './../controller/marketController.js';

const router = express.Router();

router.get('/', getMarketData);
router.post('/', createMarketEntry);
router.put('/:id', updateMarketEntry); // Route for updating a specific market entry

export default router;
