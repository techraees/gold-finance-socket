import express from 'express';
import * as bankController from '../controller/bankController.js'; // Import all controller functions

const router = express.Router();

router.post("/", bankController.createBankDetail);
router.get("/", bankController.getBankDetail);
router.put("/", bankController.updateBankDetail);
router.delete("/", bankController.deleteBankDetail);

export default router; // Export the router
