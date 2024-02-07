// footerRoutes.js
import express from 'express';
import { createFooter, getFooter, updateFooter, deleteFooter } from './../controller/footerController.js';

const router = express.Router();

router.post('/', createFooter);
router.get('/', getFooter);
router.put('/:id', updateFooter);
router.delete('/:id', deleteFooter);

export default router;
