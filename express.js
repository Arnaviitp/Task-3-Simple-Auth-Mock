// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Mock credentials
const USER = { username: "admin", password: "12345" };

// Login route
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === USER.username && password === USER.password) {
    return res.json({ success: true, message: "Login successful 🎉" });
  }
  res.status(401).json({ success: false, message: "Invalid credentials ❌" });
});

app.listen(5000, () =>
  console.log("🚀 Server running on http://localhost:5000")
);
