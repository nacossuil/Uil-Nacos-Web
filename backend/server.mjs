import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Execs from './ExecsSchema.mjs';
import Events from './EventSchema.mjs';
import cloudinary from 'cloudinary';
import {CloudinaryStorage} from 'multer-storage-cloudinary';
import multer from 'multer';
import {newEventValidator, execsValidator, sessionvalidator} from "./validators.mjs";
import {validationResult} from 'express-validator';

dotenv.config();
const app = express();
const mongoDBUrI = process.env.mongoDBUrI;
const portNumber = process.env.PORT;

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

// Connect to MongoDB
mongoose.connect(`${mongoDBUrI}`).then(() => {
    console.log("Connected successfully to MongoDB");
}).catch((error) => {
    console.error("Failed to connect to MongoDB", error);
});

// Routes
app.get('/api/events', async (req, res) => {
    try {
        const {page = 1, limit = 10, startDate, endDate} = req.query;

        let dbQuery = {};
        if (startDate && endDate) {
            dbQuery.startDate = {$gte: new Date(startDate)};
            dbQuery.endDate = {$lte: new Date(endDate)};
        }

        const events = await Events
            .find(dbQuery)
            .skip((page - 1) * limit)
            .lean()
            .exec();

        const count = await Events.countDocuments(dbQuery);

        res.json({
            events, totalPages: Math.ceil(count / limit), currentPage: page
        });

    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

app.post('/api/events', newEventValidator, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    const event = new Events({
        title: req.body.title,
        description: req.body.description,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        price: req.body.price,
        location: req.body.location,
        imageUrl: req.body.imageUrl
    });
    try {
        const newEvent = await event.save();
        res.status(201).json(newEvent);
    } catch (error) {
        res.status(400).json({message: error.message});
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

app.get('/api/events/:id', async (req, res) => {
    try {
        const event = await Events.findById(req.params.id);
        if (!event) {
            return res.status(404).json({message: "Event not found"});
        }
        res.json(event);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

app.put('/api/events/:id', newEventValidator, async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    try {
        const updatedEvent = await Events.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if (!updatedEvent) {
            return res.status(404).json({message: "Event not found"});
        }
        res.json(updatedEvent);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});

app.delete('/api/events/:id', async (req, res) => {
    try {
        const deletedEvent = await Events.findByIdAndDelete(req.params.id);
        if (!deletedEvent) {
            return res.status(404).json({message: "Event not found"});
        }
        res.json({message: "Event deleted successfully"});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({message: "Internal Server Error: Something went wrong!"});
});

app.listen(portNumber, () => {
    console.log(`Server running on port ${portNumber}`);
});