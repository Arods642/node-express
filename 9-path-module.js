const path = require('path');

console.log(path.sep);

const filePath = path.join('/content/', '/subfolder/', 'test.txt');
console.log(filePath);

const base = path.basename(filePath)
console.log(base)

// absolute path 
//   /Users/anthony/react-projects/node express/content/subfolder/test.txt
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)