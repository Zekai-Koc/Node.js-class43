// https://www.digitalocean.com/community/tutorials/how-to-create-an-http-client-with-core-http-in-node-js

"use strict";

const http = require("http");

const url1 =
  process.argv[2] || "http://jsonplaceholder.typicode.com/users?_limit=2";

let data1 = "";

let request = http
  .get(url1, (res) => {
    // res.setEncoding("utf8");
    res.on("data", (chunk) => {
      console.log(chunk.toString());
    });
  })

  .on("error", (err) => {
    console.log(err);
  });

// const urlHTML = "./index.html";
// const urlJS = "./index.js";
// const urlCSS = "./style.css";

// let server = http.createServer(function (req, res) {
//   if (req.url == "/") {
//     contentType = "text/html";
//     url = urlHTML;
//   } else if (req.url == "/index.js") {
//     contentType = "application/javascript";
//     url = urlJS;
//   } else if (req.url == "/style.css") {
//     contentType = "text/css";
//     url = urlCSS;
//   }

//   fs.readFile(url, "utf8", (err, content) => {
//     if (err) return;

//     res.statusCode = 200;

//     res.setHeader("Content-Type", contentType);
//     // res.setHeader("Content-Type", "text/plain");

//     res.write(content); // Sends a response back to the client
//     res.end(); // Ends the response
//   });
// });

// server.listen(3000); // The server starts to listen on port 3000

/*  *****************  */

// const http = require("http");

// const url = process.argv[2];

// http
//   .get(url, (response) => {
//     response.setEncoding("utf8");

//     response.on("data", (data) => {
//       console.log(data);
//     });
//   })
//   .on("error", (error) => {
//     console.error(`Error: ${error.message}`);
//   });
