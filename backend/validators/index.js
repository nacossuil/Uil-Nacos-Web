import { body, query } from "express-validator";

// ✅ Executive Validator
export const execsValidator = [
  body("name").notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Valid email is required"),
  body("position").notEmpty().withMessage("Position is required"),
  body("studentId")
    .notEmpty()
    .withMessage("Student ID is required")
    .isLength({ min: 6, max: 20 })
    .withMessage("Student ID must be between 6 and 20 characters"),
  body("session")
    .matches(/^\d{4}\/\d{4}$/)
    .withMessage("Session must follow the format YYYY/YYYY"),
];

// ✅ Contact Form Validator
export const formValidator = [
  body("email").isEmail().withMessage("Valid email is required"),
  body("subject").notEmpty().withMessage("Subject is required"),
  body("message")
    .isLength({ min: 10 })
    .withMessage("Message must be at least 10 characters"),
];

// ✅ Event Creation Validator
export const newEventValidator = [
  body("title").notEmpty().withMessage("Title is required"),
  body("description")
    .notEmpty()
    .withMessage("Description is required")
    .isLength({ min: 10 })
    .withMessage("Description must be at least 10 characters"),
  body("startDateAndTime")
    .matches(/^\d{4}-\d{2}-\d{2}-\d{1,2}:\d{2}(am|pm)$/i)
    .withMessage("Start date must be in format YYYY-MM-DD-H:MMam/pm"),
  body("endDateAndTime")
    .matches(/^\d{4}-\d{2}-\d{2}-\d{1,2}:\d{2}(am|pm)$/i)
    .withMessage("End date must be in format YYYY-MM-DD-H:MMam/pm"),
  body("venue").notEmpty().withMessage("Venue is required"),
];

// ✅ Session Validator (Query-based)
export const sessionvalidator = [
  query("session")
    .notEmpty()
    .withMessage("Session is required")
    .matches(/^\d{4}-\d{4}$/)
    .withMessage("Session must be in format YYYY-YYYY"),
];
