// async approach, callbacks example(so called callback-hell):  

const { readFile, writeFile } = require('fs');

console.log(1, 'start');

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;

    console.log(2, 'Done reading the first file..');

    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;

        console.log(3, 'Done reading the second file..');

        writeFile('./content/result-async.txt', `Here is the result : ${first}, ${second}`, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(result);

            console.log(4, 'Done writing the result of the first two readings..');
        });
    })
});

console.log(5, 'Starting the next task..');
console.log(6, '..and the next task');
console.log(7, '..and the next task');
console.log(8, '..and the next task');
console.log(9, '...and the next task');
console.log(10, '...and the next task');
console.log(11, '...and the next task');
console.log(12, '...and the next task');