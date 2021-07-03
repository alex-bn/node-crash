// REMEMBER that readFile is asynchronous and the EVENT LOOP will offload the callback, in the case shown below to the file system
const { readFile, writeFile } = require('fs');

console.log('Started a first task', 1);
/// CHECK FILE PATH
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(result);
    console.log('Completed first task', 2);
});
console.log('Starting next task', 3);