import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Set EJS as view engine
app.set("view engine", "ejs");

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => {
  res.render("index", { initialTime: "00" });
});
app.get("/result", (req, res) => {
  res.render("result");
});
// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
