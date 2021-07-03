
const { readFileSync, writeFileSync } = require('fs'); // destructuring the methods
// similar to :
// const fs = require('fs');
// fs.readFileSync

console.log(1, 'Reading the first file (maybe its  10gbs so you have to wait a loong time..)');

const first = readFileSync('./content/first.txt', 'utf8');

console.log(2, 'Reading second file (another 10gbs...)');

const second = readFileSync('./content/second.txt', 'utf8');

writeFileSync(
    './content/result-sync.txt', `Here is the result of the first two readings : ${first} + ${second}`, { flag: 'a' }
);

const third = readFileSync('./content/result-sync.txt', 'utf8');
console.log(3, 'Writing the final task');
console.log(third, 'read');

console.log(4, 'done with the job!');
console.log(5, 'starting the next Job!');
console.log(6, '..and the next Job!');
console.log(7, '..and the next Job!');
console.log(8, '..and the next Job!');
console.log(9, '..and the next Job!');