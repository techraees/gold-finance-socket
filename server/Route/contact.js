// contactRoutes.js
import express from 'express';
import * as contactController from './../controller/contactController.js';

const router = express.Router();

// CRUD operations for contacts
router.post('/', contactController.createContact); // Create a new contact
router.get('/', contactController.getContacts); // Get all contacts
router.put('/:id', contactController.updateContact); // Update a contact by ID
router.delete('/:id', contactController.deleteContact); // Delete a contact by ID

export default router;
