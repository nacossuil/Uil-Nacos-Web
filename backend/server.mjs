import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import Execs from "./ExecsSchema.mjs"
import Events from "./EventSchema.mjs"
import cloudinary from "cloudinary"
import { CloudinaryStorage } from "multer-storage-cloudinary"
import multer from "multer"
import { execsValidator, formValidator, newEventValidator, sessionvalidator } from "./validators.mjs"
import { validationResult } from "express-validator"
import nodemailer from "nodemailer"
import cors from "cors"

dotenv.config()

const app = express()
const mongoDBUrI = process.env.mongoDBUrI
const portNumber = process.env.PORT
const nacosUnilorinEmailAddress = process.env.NACOSS_UNILORIN_EMAIL
const nacossUnilorinEmailPassword = process.env.NACOSS_UNILORIN_EMAIL_PASSWORD

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

async function fixAllIndexes() {
  try {
    console.log("Attempting to fix all indexes...")
    
    const indexes = await mongoose.connection.collection('executives').indexes()
    console.log("Current indexes:", indexes)
    
    for (const index of indexes) {
      if (index.name !== "_id_") {
        try {
          await mongoose.connection.collection('executives').dropIndex(index.name)
          console.log(`Successfully dropped index ${index.name}`)
        } catch (error) {
          console.log(`Error dropping index ${index.name}:`, error.message)
        }
      }
    }
    
    await mongoose.connection.collection('executives').createIndex(
      { studentId: 1, session: 1 }, 
      { unique: true }
    )
    console.log("Created studentId+session compound index")
    
    await mongoose.connection.collection('executives').createIndex(
      { position: 1, session: 1 }, 
      { unique: true }
    )
    console.log("Created position+session compound index")
    
    await mongoose.connection.collection('executives').createIndex(
      { email: 1, session: 1 }, 
      { unique: true }
    )
    console.log("Created email+session compound index")
    
    console.log("Successfully fixed all indexes")
    
  } catch (error) {
    console.error("Error fixing indexes:", error)
  }
}

mongoose
  .connect(mongoDBUrI)
  .then(async () => {
    console.log("Connected successfully to MongoDB")
    await fixAllIndexes() 
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error)
  })
  
  

const storage = new CloudinaryStorage({
  cloudinary: cloudinary.v2,
  params: {
    folder: "execs",
    allowed_formats: ["jpg", "png", "jpeg", "webp"],
    format: "auto",
    transformation: [
      { width: 1000, height: 1000, crop: "limit" },
      { fetch_format: "auto", quality: "auto" },
    ],
  },
})

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, 
})

const handleMulterError = (err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    console.error("Multer error:", err)
    return res.status(400).json({
      error: true,
      message: `File upload error: ${err.message}`,
      code: err.code,
    })
  } else if (err) {
    console.error("Unknown upload error:", err)
    return res.status(500).json({
      error: true,
      message: err.message || "Unknown file upload error",
    })
  }
  next()
}

//cors
const allowedOrigins = ["http://localhost:5173", "https://uil-nacos-web.vercel.app"]

const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) return callback(null, true)
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = "The CORS policy for this site does not allow access from the specified Origin."
      return callback(new Error(msg), false)
    }
    return callback(null, true)
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors(corsOptions))
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`)
  console.log("Origin:", req.headers.origin)
  next()
})

mongoose
  .connect(mongoDBUrI)
  .then(() => {
    console.log("Connected successfully to MongoDB")
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error)
  })

// Routes
app.get("/api/events", async (req, res, next) => {
  try {
    const events = await Events.find().select("-_id -__v").lean().exec()
    res.status(200).json(events)
  } catch (error) {
    next(error) 
  }
})

app.post("/api/events", upload.single("image"), handleMulterError, newEventValidator, async (req, res, next) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      console.log("Validation errors:", errors.array())
      return res.status(400).json({
        error: true,
        message: "Validation failed",
        errors: errors.array(),
      })
    }

    const { title, description, startDateAndTime, endDateAndTime, price, venue } = req.body
    console.log("Event data received:", req.body)

    const eventData = {
      title,
      description,
      startDateAndTime,
      endDateAndTime,
      price,
      venue,
    }

    if (!req.file) {
      return res.status(400).json({
        error: true,
        message: "An image file has to be attached.",
      })
    }

    console.log("File uploaded to Cloudinary:", req.file)
    eventData.image = req.file.path 

    const event = new Events(eventData)
    const newEvent = await event.save()

    res.status(201).json(newEvent)
  } catch (error) {
    console.error("Error creating event:", error)
    next(error)
  }
})

app.get("/api/execs", sessionvalidator, async (req, res, next) => {
  try {
    const { session } = req.query
    console.log("Fetching executives for session:", session)

    if (!session) {
      return res.status(400).json({
        error: true,
        message: "Session is required in the request object",
      })
    }

    const execs = await Execs.findBySession(session)
    console.log(`Found ${execs.length} executives for session ${session}`)

    res.status(200).json({
      execs,
      totalExecs: execs.length,
    })
  } catch (error) {
    console.error("Error fetching executives:", error)
    next(error)
  }
})

// Get available sessions
app.get("/api/sessions", async (req, res, next) => {
  try {
    const sessions = await Execs.distinct("session")
    res.status(200).json({
      sessions,
      count: sessions.length
    })
  } catch (error) {
    console.error("Error fetching sessions:", error)
    next(error)
  }
})

app.post("/api/execs", upload.single("image"), handleMulterError, execsValidator, async (req, res, next) => {
  try {
    console.log("Received exec creation request")
    console.log("Request body:", req.body)
    console.log("File:", req.file)

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      console.log("Validation errors:", errors.array())
      return res.status(400).json({
        error: true,
        message: "Validation failed",
        errors: errors.array(),
      })
    }

    let imageUrl 
    if (req.file) {
      imageUrl = req.file.path
      console.log("Image uploaded to Cloudinary:", imageUrl)
    } else {
      console.log("No image file provided")
      return res.status(400).json({
        error: true,
        message: "An image file is required",
      })
    }

    // Check if executive with same email or studentId exists in the SAME session
    const existingExecWithEmail = await Execs.findOne({ 
      email: req.body.email,
      session: req.body.session
    })

    if (existingExecWithEmail) {
      return res.status(400).json({
        error: true,
        message: "An executive with this email already exists in this session",
      })
    }

    const existingExecWithStudentId = await Execs.findOne({ 
      studentId: req.body.studentId,
      session: req.body.session
    })

    if (existingExecWithStudentId) {
      return res.status(400).json({
        error: true,
        message: "An executive with this student ID already exists in this session",
      })
    }

    // Check if position is already filled for this session
    const existingExecWithPosition = await Execs.findOne({
      position: req.body.position,
      session: req.body.session
    })

    if (existingExecWithPosition) {
      return res.status(400).json({
        error: true,
        message: `Position ${req.body.position} is already filled for session ${req.body.session}`,
      })
    }

    // If all checks pass, create the new executive
    const exec = new Execs({
      name: req.body.name,
      email: req.body.email,
      position: req.body.position,
      studentId: req.body.studentId,
      session: req.body.session,
      imageUrl: imageUrl,
    })

    console.log("Creating new executive:", exec)
    const newExec = await exec.save()
    console.log("Executive created successfully:", newExec)

    res.status(201).json(newExec)
  } catch (error) {
    console.error("Error creating executive:", error)

    if (error.name === "ValidationError") {
      return res.status(400).json({
        error: true,
        message: "Validation error",
        details: Object.values(error.errors).map((err) => err.message),
      })
    }

    if (error.code === 11000) {
      const keyPattern = error.keyPattern || {}
      let errorMessage = "Duplicate key error"
      
      if (keyPattern.position && keyPattern.session) {
        errorMessage = `Position ${req.body.position} is already filled for session ${req.body.session}`
      } else if (keyPattern.studentId && keyPattern.session) {
        errorMessage = `Student ID ${req.body.studentId} is already an executive for session ${req.body.session}`
      } else if (keyPattern.email && keyPattern.session) {
        errorMessage = `Email ${req.body.email} is already used in session ${req.body.session}`
      }
      
      return res.status(400).json({
        error: true,
        message: errorMessage,
        details: error.keyValue,
      })
    }

    next(error)
  }
})

app.post("/api/execs/bulk", upload.array("images", 20), handleMulterError, async (req, res, next) => {
  try {
    console.log("Received bulk exec creation request")
    
    if (!req.body.executives) {
      return res.status(400).json({
        error: true,
        message: "No executives data provided",
      })
    }
    
    let executives = []
    try {
      executives = JSON.parse(req.body.executives)
    } catch (e) {
      return res.status(400).json({
        error: true,
        message: "Invalid executives data format",
      })
    }
    
    if (!Array.isArray(executives) || executives.length === 0) {
      return res.status(400).json({
        error: true,
        message: "Executives data must be a non-empty array",
      })
    }
    
    if (req.files && req.files.length > 0) {
      executives = executives.map((exec, index) => {
        if (req.files[index]) {
          return {
            ...exec,
            imageUrl: req.files[index].path
          }
        }
        return exec
      })
    }
    
    const results = {
      success: [],
      errors: []
    }
    
    for (const exec of executives) {
      try {
        // Check if executive with same email or studentId exists in the SAME session
        const existingExecWithEmail = await Execs.findOne({ 
          email: exec.email,
          session: exec.session
        })

        if (existingExecWithEmail) {
          results.errors.push({
            executive: exec,
            error: "Email already exists in this session"
          })
          continue
        }

        const existingExecWithStudentId = await Execs.findOne({ 
          studentId: exec.studentId,
          session: exec.session
        })

        if (existingExecWithStudentId) {
          results.errors.push({
            executive: exec,
            error: "Student ID already exists in this session"
          })
          continue
        }

        // Check if position is already filled for this session
        const existingExecWithPosition = await Execs.findOne({
          position: exec.position,
          session: exec.session
        })

        if (existingExecWithPosition) {
          results.errors.push({
            executive: exec,
            error: `Position ${exec.position} is already filled for session ${exec.session}`
          })
          continue
        }
        
        // Create and save the executive
        const newExec = new Execs(exec)
        await newExec.save()
        results.success.push(newExec)
      } catch (error) {
        results.errors.push({
          executive: exec,
          error: error.message
        })
      }
    }
    
    res.status(200).json({
      message: `Processed ${executives.length} executives. ${results.success.length} succeeded, ${results.errors.length} failed.`,
      results
    })
    
  } catch (error) {
    console.error("Error in bulk upload:", error)
    next(error)
  }
})

// Contact form submission
app.post("/api/submit-contact-form", formValidator, async (req, res, next) => {
  try {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      console.log("Form validation errors:", errors.array())
      return res.status(400).json({
        error: true,
        message: "Validation failed",
        errors: errors.array(),
      })
    }

    const { email, subject, message } = req.body
    console.log("Contact form submission:", { email, subject })

    await sendEmail(email, subject, message)
    return res.status(200).json({
      success: true,
      message: "Email sent successfully",
    })
  } catch (err) {
    console.error("Error sending email:", err)
    return res.status(500).json({
      error: true,
      message: "Failed to send email",
      details: err.message,
    })
  }
})

async function sendEmail(from, subject, text) {
  // Create a transporter using SMTP
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // Updated to Gmail SMTP server
    port: 587,
    secure: false, // Use TLS
    auth: {
      user: nacosUnilorinEmailAddress,
      pass: nacossUnilorinEmailPassword,
    },
  })

  // email options
  const mailOptions = {
    from,
    to: nacosUnilorinEmailAddress,
    subject,
    text,
  }

  // Return promise instead of using callback
  return transporter.sendMail(mailOptions)
}

// Test endpoint to check if server is running
app.get("/api/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Server is running",
    timestamp: new Date().toISOString(),
  })
})

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({
    error: true,
    message: `Route not found: ${req.method} ${req.url}`,
  })
})

// Error handling middleware - MUST have 4 parameters
app.use((err, req, res, next) => {
  console.error("Server error:", err)

  // Send appropriate error response
  res.status(err.status || 500).json({
    error: true,
    message: err.message || "Internal Server Error: Something went wrong!",
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  })
})

app.listen(portNumber, () => {
  console.log(`Server running on port ${portNumber}`)
})