import express from "express";
import { submitContactForm } from "../controllers/contactController.js";
import { formValidator } from "../validators/index.js";

const router = express.Router();
router.post("/", formValidator, submitContactForm);
export default router;
