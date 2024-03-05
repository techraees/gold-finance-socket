import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import navbarRoutes from "./Route/navbar.js";
import footerRoutes from "./Route/footer.js";
import bankRoutes from "./Route/bank.js";
import aboutRoutes from "./Route/about.js";
import contactRoutes from "./Route/contact.js";
import colorRoutes from "./Route/color.js";
import marketRoutes from "./Route/market.js";
import userRoutes from "./Route/user.js";
import WebSocket from "ws";
const ws = new WebSocket("wss://marketdata.tradermade.com/feedadv");
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Database connection
mongoose.connect(
  "mongodb+srv://zafarzain544:zainzafar@cluster0.vzots6d.mongodb.net/"
);
const db = mongoose.connection;
db.on("error", (error) => console.error("MongoDB connection error:", error));
db.once("open", () => console.log("MongoDB connected successfully"));

// Routes
app.get("/", (req, res) => {
  res.send("HELLO WORLd");
});
app.use("/api/users", userRoutes);
app.use("/api/navbar", navbarRoutes);
app.use("/api/footer", footerRoutes);
app.use("/api/bank-details", bankRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/color", colorRoutes);
app.use("/api/market", marketRoutes);

app.get("/admin", (req, res) => {
  const token = req.headers.authorization;

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, "secret");
    if (decoded.role !== "admin") {
      return res.status(403).json({ message: "Access denied. Not an admin." });
    }
    res.json({ message: "Welcome to admin panel" });
  } catch (error) {
    res.status(400).json({ message: "Invalid token" });
  }
});

ws.on("open", function open() {
  ws.send('{"userKey":"wsNt-jEzxjWPNcJWMzeA", "symbol":"XAUUSD"}');
});
ws.on("message", function incoming(data) {
  console.log("Data %s ",data)
  if (data != "Connected") {
    data = JSON.parse(data);
    console.log(data);
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
