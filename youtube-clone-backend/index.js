 Import required packages
 const express = require('express');
 const cors = require('cors');
 const dotenv = require('dotenv');
 const connectDB = require('./config/db');

 // Load environment variables from .env file
 dotenv.config();
//
 // Initialize Express app
 const app = express();

 // Middleware
 app.use(cors()); // Enable Cross-Origin Resource Sharing
 app.use(express.json()); // Parse incoming JSON data

 // Connect to MongoDB
 connectDB();

 // Basic route for testing the server
 app.get('/', (req, res) => {
   res.send('YouTube Clone Backend is running!');
   });

   // Set the port from environment variables or default to 5000
   const PORT = process.env.PORT || 5000;

   // Start the server
   app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
     });

