import express from "express";

const router = express.Router();

// user routes
router.get("/users", (req, res) => {
  res.send("This is GET user...");
});

router.get("/users:id", (req, res) => {
  res.send("This is GET One User...");
});

router.post("/users:id", (req, res) => {
  res.send("This is ADD User...");
});

router.put("/users:id", (req, res) => {
  res.send("This is UPDATE User...");
});

router.delete("/users:id", (req, res) => {
  res.send("This is DELETE User...");
});

export default router;
