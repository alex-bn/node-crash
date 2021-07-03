// CommonJS, every files is a module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');
require('./7-mind-grenade');

sayHi('Susan');
sayHi(names.john);
sayHi(names.peter);


// CommonJS, every files is a module (by default)
// Modules - Encapsulated Code (only share minimum)
// !!
require('./7-mind-grenade')
// if we have a function inside of the module that we invoked, yes that code will run even though we didn't assign it to a variable and we didn't invoke that variable 

// remember that when you import a module you actually invoked it 

console.log(names);
console.log(data);