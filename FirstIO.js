var fs = require("fs");
var buffer = fs.readFileSync(process.argv[2],'utf8');
var line =buffer.split('\n').length -1;
console.log(line)