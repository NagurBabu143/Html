const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set up storage configuration for Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Specify the uploads directory
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Append date to file name
  },
});

// Initialize Multer with the storage configuration
const upload = multer({ storage: storage });

// Create an endpoint for image uploads
app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }
  
  // Get the URL of the uploaded file
  const imageUrl = `http://localhost:${PORT}/uploads/${req.file.filename}`;
  
  // Respond with the image URL (you can also save it to a database here)
  res.json({ imageUrl });
});

// Serve uploaded images
app.use('/uploads', express.static('uploads'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
