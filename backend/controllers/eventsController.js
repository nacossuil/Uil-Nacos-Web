import Events from "../models/Event.js";
import { validationResult } from "express-validator";

export const getEvents = async (req, res, next) => {
  try {
    const events = await Events.find().select("-__v -_id");
    res.status(200).json(events);
  } catch (err) {
    next(err);
  }
};

export const createEvent = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: true, errors: errors.array() });
    }

    if (!req.file) {
      return res
        .status(400)
        .json({ error: true, message: "Image is required." });
    }

    const event = new Events({
      ...req.body,
      image: req.file.path,
    });

    const saved = await event.save();
    res.status(201).json(saved);
  } catch (err) {
    next(err);
  }
};
