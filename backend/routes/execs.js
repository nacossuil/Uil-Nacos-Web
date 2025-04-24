import express from "express";
import {
  getExecs,
  createExec,
  bulkCreateExecs,
} from "../controllers/execsController.js";
import { execsValidator, sessionvalidator } from "../validators/index.js";
import { upload, handleMulterError } from "../middleware/multer.js";

const router = express.Router();

router.get("/", sessionvalidator, getExecs);
router.post(
  "/",
  upload.single("image"),
  handleMulterError,
  execsValidator,
  createExec
);
router.post(
  "/bulk",
  upload.array("images", 20),
  handleMulterError,
  bulkCreateExecs
);

export default router;
