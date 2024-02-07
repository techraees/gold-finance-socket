import express from 'express';
import { getNavbarItems, createNavbarItem, updateNavbarItem, deleteNavbarItem } from './../controller/navbarController.js';

const router = express.Router();

router.get("/", getNavbarItems);
router.post("/", createNavbarItem);
router.put("/:id", updateNavbarItem);
router.delete("/:id", deleteNavbarItem);

export default router;
