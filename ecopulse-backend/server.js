require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./src/routes/authRoutes");
const activityRoutes = require("./src/routes/activityRoutes");
const aiRoutes = require("./src/routes/aiRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Connect MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(()=>console.log("MongoDB connected"))
  .catch((err)=>console.error(err));

// Mount routes
app.use("/api/auth", authRoutes);
app.use("/api", activityRoutes);
app.use("/api", aiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server on port ${PORT}`));
