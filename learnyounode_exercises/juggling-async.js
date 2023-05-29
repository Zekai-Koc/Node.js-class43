const http = require("http");

const urls = process.argv.slice(2);
const results = [];
let completedRequests = 0;

function printResults() {
  results.forEach((data) => {
    console.log(data);
  });
}

function getRequest(url, index) {
  http
    .get(url, (response) => {
      let responseData = "";

      response.on("data", (data) => {
        responseData += data;
      });

      response.on("end", () => {
        results[index] = responseData;
        completedRequests++;

        if (completedRequests === urls.length) {
          printResults();
        }
      });
    })
    .on("error", (error) => {
      console.error(`Error: ${error.message}`);
    });
}

urls.forEach((url, index) => {
  getRequest(url, index);
});

// const http = require("http");

// const urls = process.argv.slice(2);
// const responses = [];

// function getRequest(url, index) {
//   http
//     .get(url, (response) => {
//       let responseData = "";

//       response.on("data", (data) => {
//         responseData += data;
//       });

//       response.on("end", () => {
//         responses[index] = responseData; // Store the response in the array
//         if (responses.length === urls.length) {
//           // Check if all responses are collected
//           responses.forEach((data) => {
//             console.log(data); // Print the responses in the same order
//           });
//         }
//       });
//     })
//     .on("error", (error) => {
//       console.error(`Error: ${error.message}`);
//     });
// }

// // Loop through the URLs and initiate requests
// urls.forEach((url, index) => {
//   getRequest(url, index);
// });

// // // https://www.digitalocean.com/community/tutorials/how-to-create-an-http-client-with-core-http-in-node-js

// // const http = require("http");

// // const url1 = "http://jsonplaceholder.typicode.com/users?_limit=2"; // process.argv[2];
// // const url2 = "http://jsonplaceholder.typicode.com/posts?_limit=2"; // process.argv[3];
// // const url3 = "http://jsonplaceholder.typicode.com/todos?_limit=2"; // process.argv[4];
// // let data1 = "";
// // let data2 = "";
// // let data3 = "";

// // http
// //   .get(url1, (response) => {
// //     // data1 = "";

// //     response.on("data", (data) => {
// //       data1 += data;
// //     });

// //     response.on("end", () => {
// //       // console.log(data1);

// //       http.get(url2, (response) => {
// //         // data2 = "";

// //         response.on("data", (data) => {
// //           data2 += data;
// //         });

// //         response.on("end", () => {
// //           // console.log(data2);

// //           http.get(url3, (response) => {
// //             // data3 = "";

// //             response.on("data", (data) => {
// //               data3 += data;
// //             });

// //             response.on("end", () => {
// //               console.log(data1, data2, data3);
// //             });
// //           });
// //         });
// //       });
// //     });
// //   })
// //   .on("error", (error) => {
// //     console.error(`Error: ${error.message}`);
// //   });

// // // let request = http.get(url1, (res) => {
// // //   res.on("data", (chunk) => {
// // //     data1 += chunk;
// // //   });

// // //   res
// // //     .on("close", () => {
// // //       // console.log(data1.toString());
// // //       let request = http.get(url2, (res) => {
// // //         res.on("data", (chunk) => {
// // //           data2 += chunk;
// // //         });

// // //         res.on("close", () => {
// // //           // console.log(data2.toString());

// // //           let request = http.get(url3, (res) => {
// // //             res.on("data", (chunk) => {
// // //               data3 += chunk;
// // //             });

// // //             res.on("close", () => {
// // //               // console.log(data1.toString());
// // //               // console.log(data2.toString());
// // //               // console.log(data3.toString());
// // //               console.log((data1 + data2 + data3).toString());
// // //             });
// // //           });
// // //         });
// // //       });
// // //     })
// // //     .on("error", (error) => {
// // //       console.error(`Error: ${error.message}`);
// // //     });
// // // });

// // // const urlHTML = "./index.html";
// // // const urlJS = "./index.js";
// // // const urlCSS = "./style.css";

// // // let server = http.createServer(function (req, res) {
// // //   if (req.url == "/") {
// // //     contentType = "text/html";
// // //     url = urlHTML;
// // //   } else if (req.url == "/index.js") {
// // //     contentType = "application/javascript";
// // //     url = urlJS;
// // //   } else if (req.url == "/style.css") {
// // //     contentType = "text/css";
// // //     url = urlCSS;
// // //   }

// // //   fs.readFile(url, "utf8", (err, content) => {
// // //     if (err) return;

// // //     res.statusCode = 200;

// // //     res.setHeader("Content-Type", contentType);
// // //     // res.setHeader("Content-Type", "text/plain");

// // //     res.write(content); // Sends a response back to the client
// // //     res.end(); // Ends the response
// // //   });
// // // });

// // // server.listen(3000); // The server starts to listen on port 3000

// // /*  *****************  */

// // // const http = require("http");

// // // const url = process.argv[2];

// // // http
// // //   .get(url, (response) => {
// // //     response.setEncoding("utf8");

// // //     response.on("data", (data) => {
// // //       console.log(data);
// // //     });
// // //   })
// // //   .on("error", (error) => {
// // //     console.error(`Error: ${error.message}`);
// // //   });
