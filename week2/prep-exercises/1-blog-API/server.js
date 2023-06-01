const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello World!!!");
});

app.post("/blogs", (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    res.send("No title and/or content!");
    return;
  }

  if (fs.existsSync(title)) {
    res.send("This post already exists!");
    return;
  }

  res.setHeader("content-type", "application/json");
  fs.writeFileSync(title, content);
  res.end("ok");
});

app.put("/posts/:title", (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    res.send("No title and/or content!");
    return;
  }

  if (fs.existsSync(title)) {
    fs.writeFileSync(title, content);
    res.end("ok");
  } else {
    res.send("This post does not exist!");
  }
});

app.delete("/blogs/:title", (req, res) => {
  const { title } = req.params;
  if (fs.existsSync(title)) {
    fs.unlinkSync(title);
    res.end("ok");
  } else {
    res.send("No post found!");
  }
});

app.get("/blogs/:title", (req, res) => {
  const { title } = req.params;
  if (fs.existsSync(title)) {
    const post = fs.readFileSync(title);
    res.send(post);
  } else {
    res.send("No such a post!");
  }
});

app.get("/blogs", (req, res) => {
  res.send(`Coming soon...`);
  // how to get the file names of all files in a folder??
});

app.listen(3000);
