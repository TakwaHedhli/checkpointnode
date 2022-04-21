let fs = require("fs");
let path = require("path");

let folder = process.argv[2];
let extention = "." + process.argv[3];

fs.readdir(folder, function (err, list) {
  if (err) return console.error(err);
  list.forEach(function (file) {
    if (path.extname(file) === extention) {
      console.log(file);
    }
  });
});