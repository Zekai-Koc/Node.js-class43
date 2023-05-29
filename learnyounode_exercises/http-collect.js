const http = require("http");

const url = process.argv[2];

http
  .get(url, (response) => {
    let responseData = "";

    response.on("data", (data) => {
      responseData += data;
    });

    response.on("end", () => {
      console.log(responseData.length);
      console.log(responseData);
    });
  })
  .on("error", (error) => {
    console.error(`Error: ${error.message}`);
  });
