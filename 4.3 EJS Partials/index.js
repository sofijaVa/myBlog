import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/new", (req, res) => {
  res.render("newPost.ejs");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
