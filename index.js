import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import eventRoutes from "./routes/events.js";
import authRoutes from "./routes/auth.js";

dotenv.config();

const app = express(); // ✅ CREATE FIRST

// ✅ middlewares
app.use(cors());
app.use(express.json());

// ✅ routes AFTER app is created
app.use("/events", eventRoutes);
app.use("/auth", authRoutes);

// ✅ DB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected ✅"))
  .catch(err => console.log(err));

// ✅ test route
app.get("/", (req, res) => {
  res.send("Backend working ✅");
});

// ✅ start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});