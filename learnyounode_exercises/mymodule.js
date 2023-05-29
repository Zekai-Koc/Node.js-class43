const fs = require("fs");
const path = require("path");

// const directoryToList = process.argv[2];
// const extentionToFilter = "." + process.argv[3];

module.exports = (dirName, extName, cbFuncion) => {
  fs.readdir(dirName, (err, fileList) => {
    if (err) return cbFuncion(err);

    const filteredFileList = fileList.filter(
      (file) => path.extname(file) === "." + extName
    );

    cbFuncion(null, filteredFileList);
  });
};

// const fs = require("fs");
// const path = require("path");

// module.exports = function (pathToList, extToFilter, myCB) {
//   fs.readdir(pathToList, (err, fileList) => {
//     if (err) return myCB(err);

//     const filteredFiles = fileList.filter(
//       (file) => path.extname(file) === `.${extToFilter}`
//     );
//     myCB(null, filteredFiles);
//   });
// };
