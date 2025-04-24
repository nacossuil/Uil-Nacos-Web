import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "execs",
    allowed_formats: ["jpg", "png", "jpeg", "webp"],
    transformation: [
      { width: 1000, height: 1000, crop: "limit" },
      { fetch_format: "auto", quality: "auto" },
    ],
  },
});

export const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
});

export const handleMulterError = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    return res.status(400).json({ error: true, message: err.message });
  }
  if (err) {
    return res.status(500).json({ error: true, message: err.message });
  }
  next();
};
