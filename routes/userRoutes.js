import express from "express";

const router = express.Router();

// user routes
router.get("/", (req, res) => {
  res.send("This is GET user...");
});

router.get("/:id", (req, res) => {
  res.send("This is GET One User...");
});

router.post("/", (req, res) => {
  res.send("This is ADD User...");
});

router.put("/:id", (req, res) => {
  res.send("This is UPDATE User...");
});

router.delete("/:id", (req, res) => {
  res.send("This is DELETE User...");
});

export default router;
