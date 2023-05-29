const fs = require("fs");
const path = require("path");

const directoryToList = process.argv[2];
const extentionToFilter = "." + process.argv[3];

fs.readdir(directoryToList, (err, fileList) => {
  if (err) return;

  fileList.forEach((file) => {
    const checkPath = path.extname(file);
    if (checkPath === extentionToFilter) console.log(file);
  });
});

/*   ******************   */

// const fs = require("fs");
// const path = require("path");

// const dirToList = process.argv[2] || "./";
// const extToFilter = `.${process.argv[3]}` || `.js`;

// fs.readdir(dirToList, "utf-8", (error, files) => {
//   if (error) {
//     console.info("Error: ", error.message);
//     return;
//   }
//   const filteredList = files.filter((file) => {
//     return path.extname(file) === extToFilter;
//   });

//   filteredList.forEach((element) => console.log(element));
// });
