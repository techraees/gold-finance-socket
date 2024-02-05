
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

// Middleware
app.use(express.json());

app.use(cors());

// Database connection
mongoose.connect('mongodb+srv://zafarzain544:zainzafar@cluster0.vzots6d.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', (error) => console.error('MongoDB connection error:', error));
db.once('open', () => console.log('MongoDB connected successfully'));

// Routes
const authRoutes = require('./Route/jeweller');


app.use('/api/auth', authRoutes);


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
