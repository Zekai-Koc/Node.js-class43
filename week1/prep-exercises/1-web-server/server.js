/**
 * Exercise 3: Create an HTTP web server
 */

const http = require("http");
const fs = require("fs");

const urlHTML = "./index.html";
const urlJS = "./index.js";
const urlCSS = "./style.css";

let server = http.createServer(function (req, res) {
  if (req.url == "/") {
    contentType = "text/html";
    url = urlHTML;
  } else if (req.url == "/index.js") {
    contentType = "application/javascript";
    url = urlJS;
  } else if (req.url == "/style.css") {
    contentType = "text/css";
    url = urlCSS;
  }

  fs.readFile(url, "utf8", (err, content) => {
    if (err) return;

    res.statusCode = 200;

    res.setHeader("Content-Type", contentType);
    // res.setHeader("Content-Type", "text/plain");

    res.write(content); // Sends a response back to the client
    res.end(); // Ends the response
  });
});

server.listen(3000); // The server starts to listen on port 3000
