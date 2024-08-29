# NACOS Unilorin Web Application

This is the official web application for NACOS Unilorin (Nigeria Association of Computing Students, University of Ilorin). The project consists of a backend API built with Express.js and a frontend application built with React and Vite.

## Project Structure

The project is divided into two main parts:

1. Backend: Express.js API
2. Frontend: React application with Vite

## Backend

### Features

- CRUD operations for events
- CRUD operations for executives
- Image upload functionality using Cloudinary
- Data validation using express-validator
- MongoDB integration with Mongoose

### Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- Cloudinary for image storage
- express-validator for data validation

### API Endpoints

- Events:
    - `GET /api/events`: Retrieve all events
    - `POST /api/events`: Create a new event (includes image upload)
- Executives:
    - `GET /api/execs`: Retrieve executives by session
    - `POST /api/execs`: Create a new executive (includes image upload)

### Data Models

#### Event

- `title`: String (unique)
- `description`: String
- `startDateAndTime`: String
- `endDateAndTime`: String
- `price`: String
- `venue`: String
- `image`: String (Cloudinary URL)

#### Executive

- `name`: String (unique)
- `email`: String (unique)
- `studentId`: String (unique, indexed)
- `position`: String (unique)
- `session`: String
- `image`: String (Cloudinary URL)

## Frontend

### Features

- Built with React and Vite
- Uses Chakra UI and Material-UI for styling
- Routing with react-router-dom
- Icons from react-icons
- Toast notifications with react-toastify

### Tech Stack

- React 18
- Vite
- Chakra UI
- Material-UI
- Tailwind CSS
- React Router
- React Icons
- React Toastify

## Getting Started

### Prerequisites

- Node.js (v14 or later recommended)
- npm or yarn
- MongoDB instance (local or cloud)
- Cloudinary account

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd nacos-unilorin-web-app
   ```

2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

3. Set up backend environment variables:
   Create a `.env` file in the backend directory and add:
   ```
   mongoDBUrI=<your-mongodb-connection-string>
   PORT=<port-number>
   CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
   CLOUDINARY_API_KEY=<your-cloudinary-api-key>
   CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>
   ```

4. Install frontend dependencies:
   ```
   cd ../frontend
   npm install
   ```

### Running the Application

1. Start the backend server:
   ```
   cd backend
   npm start
   ```

2. In a new terminal, start the frontend development server:
   ```
   cd frontend
   npm run dev
   ```

The frontend will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Development

- Backend: The main application file is `app.mjs`. Schemas are defined in `EventSchema.mjs` and `ExecsSchema.mjs`.
- Frontend: The entry point is `src/main.jsx`. Components are located in the `src/components` directory.

## Contributing

Contributions to this project are welcome. Please ensure to update tests as appropriate and follow the existing code style.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Contact

For any queries regarding this project, please contact the NACOS Unilorin team.