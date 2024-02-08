import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import jewellerRoutes from './Route/jeweller.js';
import  navbarRoutes  from './Route/navbar.js';
import footerRoutes from './Route/footer.js';
import bankRoutes from "./Route/bank.js";
import aboutRoutes from './Route/about.js';
import contactRoutes from './Route/contact.js';
import colorRoutes from './Route/color.js';
import marketRoutes from './Route/market.js';

const app = express();

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
app.get("/",(req,res)=>{
  res.send("HELLO WORLd")
})
app.use('/api/auth', jewellerRoutes);
app.use("/api/navbar", navbarRoutes);
app.use("/api/footer", footerRoutes);
app.use("/api/bank-details", bankRoutes);
app.use('/api/about', aboutRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/color', colorRoutes);
app.use('/api/market', marketRoutes);

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
