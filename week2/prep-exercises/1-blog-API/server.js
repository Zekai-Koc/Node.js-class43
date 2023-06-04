const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());

app.get("/", function (req, res) {
   res.send("Hello World!!!");
});

const basePath = __dirname + "/blogs/";

app.post("/blogs", (req, res) => {
   const { title, content } = req.body;

   if (!title || !content) {
      res.status(404);
      res.send("No title and/or content!");
      return;
   }

   if (fs.existsSync(basePath + title)) {
      res.status(404);
      res.send("This post already exists!");
      return;
   }

   try {
      res.setHeader("content-type", "application/json");
      fs.writeFileSync(basePath + title, content);
      res.status(200);
      res.end("ok");
   } catch (error) {
      res.status(500);
      res.end("Error on creating post: ", error);
   }
});

app.put("/posts/:title", (req, res) => {
   const { title } = req.params;
   const { content } = req.body;
   if (!title || !content) {
      res.status(404);
      res.send("No title and/or content!");
      return;
   }
   try {
      if (fs.existsSync(basePath + title)) {
         fs.writeFileSync(basePath + title, content);
         res.status(200);
         res.end("ok");
      } else {
         res.status(404);
         res.send("This post does not exist!");
      }
   } catch (error) {
      res.status(500);
      res.end("Error on updating post: ", error);
   }
});

app.delete("/blogs/:title", (req, res) => {
   const { title } = req.params;
   try {
      if (fs.existsSync(basePath + title)) {
         fs.unlinkSync(basePath + title);
         res.status(200);
         res.end("ok");
      } else {
         res.status(404);
         res.send("No post found!");
      }
   } catch (error) {
      res.status(500);
      res.end("Error on deleting post: ", error);
   }
});

app.get("/blogs/:title", (req, res) => {
   const { title } = req.params;
   try {
      if (fs.existsSync(title)) {
         const post = fs.readFileSync(basePath + title);
         res.status(200);
         res.send(post);
      } else {
         res.status(404);
         res.send("No such a post!");
      }
   } catch (error) {
      res.status(500);
      res.end("Error on reading post: ", error);
   }
});

app.get("/blogs", (req, res) => {
   const newArray = [];
   const filenames = fs.readdirSync(basePath);

   filenames.forEach((file) => {
      newArray.push({ title: file });
   });

   console.log(newArray);

   res.send(newArray);
});

app.listen(3000);
