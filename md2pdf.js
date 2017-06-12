var markdownpdf = require("markdown-pdf")
  , fs = require("fs")

var src = process.argv[2];
var dest = src;
dest = dest.replace(/\.[^/\.]+$/, ".pdf");

console.log("Source: "+src+" -> "+dest);

fs.createReadStream(src)
  .pipe(markdownpdf())
  .pipe(fs.createWriteStream(dest))