// Basic server setup
import express from "express";

const app = express();
const router = express.Router();
const PORT = 3000;

// HTTP method handling
app.get("/", (req, res) => {
  res.send("Hello Express, this is test!");
});

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

app.use(router);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
