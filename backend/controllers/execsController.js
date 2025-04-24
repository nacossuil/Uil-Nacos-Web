import Exec from "../models/Exec";
import { validationResult } from "express-validator";

// GET /api/execs?session=YYYY-YYYY
export const getExecs = async (req, res, next) => {
  try {
    const { session } = req.query;

    if (!session) {
      return res.status(400).json({
        error: true,
        message: "Session is required in the query",
      });
    }

    const execs = await Exec.findBySession(session);

    res.status(200).json({
      execs,
      totalExecs: execs.length,
    });
  } catch (err) {
    next(err);
  }
};

// POST /api/execs
export const createExec = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: true, errors: errors.array() });
    }

    if (!req.file) {
      return res.status(400).json({
        error: true,
        message: "An image file is required",
      });
    }

    const { email, studentId, session, position } = req.body;

    const duplicateEmail = await Exec.findOne({ email, session });
    if (duplicateEmail) {
      return res.status(400).json({
        error: true,
        message: "This email already exists for the selected session",
      });
    }

    const duplicateStudentId = await Exec.findOne({ studentId, session });
    if (duplicateStudentId) {
      return res.status(400).json({
        error: true,
        message: "This student ID already exists for the selected session",
      });
    }

    const duplicatePosition = await Exec.findOne({ position, session });
    if (duplicatePosition) {
      return res.status(400).json({
        error: true,
        message: `The position "${position}" is already taken for session ${session}`,
      });
    }

    const exec = new Exec({
      name: req.body.name,
      email,
      studentId,
      position,
      session,
      imageUrl: req.file.path,
    });

    const savedExec = await exec.save();
    res.status(201).json(savedExec);
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({
        error: true,
        message: "Duplicate key error",
        details: err.keyValue,
      });
    }
    next(err);
  }
};

// POST /api/execs/bulk
export const bulkCreateExecs = async (req, res, next) => {
  try {
    if (!req.body.executives) {
      return res.status(400).json({
        error: true,
        message: "No executives data provided",
      });
    }

    let executives = [];
    try {
      executives = JSON.parse(req.body.executives);
    } catch (e) {
      return res.status(400).json({
        error: true,
        message: "Invalid executives data format (should be JSON string)",
      });
    }

    if (!Array.isArray(executives) || executives.length === 0) {
      return res.status(400).json({
        error: true,
        message: "Executives data must be a non-empty array",
      });
    }

    if (req.files && req.files.length > 0) {
      executives = executives.map((exec, index) => ({
        ...exec,
        imageUrl: req.files[index]?.path || "",
      }));
    }

    const results = { success: [], errors: [] };

    for (const exec of executives) {
      try {
        const existing = await Exec.findOne({
          $or: [
            { email: exec.email, session: exec.session },
            { studentId: exec.studentId, session: exec.session },
            { position: exec.position, session: exec.session },
          ],
        });

        if (existing) {
          results.errors.push({
            executive: exec,
            error: "Duplicate data found for this session",
          });
          continue;
        }

        const saved = await new Exec(exec).save();
        results.success.push(saved);
      } catch (e) {
        results.errors.push({ executive: exec, error: e.message });
      }
    }

    res.status(200).json({
      message: `Processed ${executives.length} executives`,
      results,
    });
  } catch (err) {
    next(err);
  }
};
