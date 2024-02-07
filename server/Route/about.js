// routes/aboutRoutes.js
import express from 'express';
const router = express.Router();
import aboutController from './../controller/aboutController.js';

// GET /api/about
router.get('/', aboutController.getAbout);

// POST /api/about
router.post('/', aboutController.createAbout);

// PUT /api/about/:id
router.put('/:id', aboutController.updateAbout);

// DELETE /api/about/:id
router.delete('/:id', aboutController.deleteAbout);

export default router;
