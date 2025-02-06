const express = require("express");
const jwt = require("jsonwebtoken");

const router = express.Router();
const users = [{ username: "admin", password: "password" }]; // Mock user

// Login Route
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username && u.password === password);

  if (user) {
    const token = jwt.sign({ username }, "secretkey", { expiresIn: "1h" });
    res.json({ token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});

module.exports = router;
