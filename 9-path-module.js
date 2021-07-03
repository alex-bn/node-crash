const path = require('path');

// return the platform specific separator/delimiter 
console.log(path.sep);

const filePath = path.join('/content/', 'subfolder', 'test.txt');
console.log(filePath);

//basename 
const base = path.basename(filePath);
console.log(base);

// return an absolute path 
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);