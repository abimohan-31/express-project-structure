// Basic server setup
import express from "express";

// import router from userRoutes.js
import userRoutes from "./routes/userRoutes.js";

const app = express();
const PORT = 3000;

// HTTP method handling
app.get("/", (req, res) => {
  res.send("Hello Express, this is test!");
});

app.use("/api", userRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
