////////////////////////////////////////////////////////////////
// GLOBALS - NO WINDOW !

// __dirname    - path to current directory
// __filename   - file name 
// require      - function to use modules (CommonJS) 
// module       - info about current module (file)
// process      - info about the env where the program is executed


console.log(__dirname);
console.log(__filename);

setInterval(() => {
    console.log('Hello World!');
}, 1000)

setInterval(function () {
    console.log('HelloWorld');
}, 500)

// also access to the console.log() function 