const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

// Load environment variables from ../.env if present
dotenv.config({ path: path.join(__dirname, "../.env") });

const ordersRouter = require("./routes/orders");

const app = express();

app.use(express.json());

// Serve frontend files
const frontendPath = path.join(__dirname, "../frontend");
app.use(express.static(frontendPath));

// API routes
app.use("/api/orders", ordersRouter);

// Admin page
app.get("/admin", (req, res) => {
  res.sendFile(path.join(frontendPath, "admin.html"));
});

// Fallback to index for main SPA (for unknown routes)
app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});

