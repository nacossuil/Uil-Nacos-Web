import express from "express";
import { getEvents, createEvent } from "../controllers/eventsController.js";
import { newEventValidator } from "../validators/index.js";
import { upload, handleMulterError } from "../middleware/multer.js";

const router = express.Router();
router.get("/", getEvents);
router.post(
  "/",
  upload.single("image"),
  handleMulterError,
  newEventValidator,
  createEvent
);
export default router;
