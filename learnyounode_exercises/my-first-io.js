const fs = require("fs");

let countNewLines = 0;

const filePath = process.argv[2] || "test.txt";

try {
  const fileContent = fs.readFileSync(filePath, "utf-8");
  countNewLines = fileContent.split("\n").length - 1;
} catch (error) {
  console.error("error: ", error);
}

console.log(countNewLines);

/* ****************************   */

// const fs = require('fs');

// const filePath = process.argv[2];

// const fileContents = fs.readFileSync(filePath, 'utf8');
// const newlineCount = fileContents.split('\n').length - 1;

// console.log(newlineCount);
