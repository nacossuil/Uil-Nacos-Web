import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Execs from './ExecsSchema.mjs';
import Events from './EventSchema.mjs';
import cloudinary from 'cloudinary';
import {CloudinaryStorage} from 'multer-storage-cloudinary';
import multer from 'multer';
import {newEventValidator, execsValidator, sessionvalidator} from "./validators.mjs";
import check, {validationResult} from 'express-validator';
import cors from 'cors';

dotenv.config();
const app = express();
const mongoDBUrI = process.env.mongoDBUrI;
const portNumber = process.env.PORT;


//cors
const allowedOrigins = [
    'http://localhost:5173',  //
    'https://app-name.netlify.app'  //To be replaced with the actual Netlify domain when deployed.
];

const corsOptions = {
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin || allowedOrigins.indexOf(origin) !== -1) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

// Configure Cloudinary
cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

// Configure Cloudinary storage
const storage = new CloudinaryStorage({
    cloudinary: cloudinary.v2, params: {
        folder: 'execs',
        allowed_formats: ['jpg', 'png', 'jpeg', 'webp'],
        format: "auto",
        transformation: [{width: 1000, height: 1000, crop: 'limit'}, {fetch_format: 'auto', quality: 'auto'}]
    }
});

// Configure multer with Cloudinary storage
const upload = multer({storage: storage});

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors(corsOptions));

// Connect to MongoDB
mongoose.connect(`${mongoDBUrI}`).then(() => {
    console.log("Connected successfully to MongoDB");
}).catch((error) => {
    console.error("Failed to connect to MongoDB", error);
});

// Routes
app.get('/api/events', async (req, res) => {
    try {
        const events = await Events
            .find()
            .select("-_id -__v")
            .lean()
            .exec();
        res.status(200).json(events);

    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

app.post('/api/events', upload.single('image'), newEventValidator, async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }

        const {title, description, startDateAndTime, endDateAndTime, price, venue} = req.body;

        const eventData = {
            title,
            description,
            startDateAndTime,
            endDateAndTime,
            price,
            venue
        };

        if (!req.file)
            res.status(400).json("An image file has to be attached.");
        eventData.image = req.file.path; // This should be the Cloudinary URL
        const event = new Events(eventData);
        const newEvent = await event.save();

        res.status(201).json(newEvent);
    } catch (error) {
        console.error('Error creating event:', error);
        res.status(500).json({message: 'Internal server error', error: error.message});
    }
});

app.get('/api/execs', sessionvalidator, async (req, res) => {
    try {
        const {session} = req.body;

        if (!session) return res.status(400).json({message: "Session is required in the request body"});
        const execs = await Execs.findBySession(session);
        // res.json({execs})
        res.status(200).json({
            execs, totalExecs: execs.length
        });
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

//
app.post('/api/execs', upload.single('image'), execsValidator, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    try {
        let imageUrl;
        if (req.file) imageUrl = req.file.path;

        const exec = new Execs({
            name: req.body.name,
            email: req.body.email,
            position: req.body.position,
            studentId: req.body.studentId,
            session: req.body.session,
            imageUrl: imageUrl, // thumbnailUrl: thumbnailUrl // If you want to save the thumbnail URL
        });

        const newExec = await exec.save();
        res.status(201).json(newExec);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});

// Error handling middleware
app.use((err, req, res) => {
    console.error(err);
    res.status(500).json({message: "Internal Server Error: Something went wrong!"});
});

app.listen(portNumber, () => {
    console.log(`Server running on port ${portNumber}`);
});