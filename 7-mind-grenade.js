const num1 = 5;
const num2 = 10;

function addValue() {
    console.log(`the sum is ${num1 + num2}`);
}

addValue();
// executing this function here makes it possible to run it in a different module
// if we have a function inside of the module that we invoked, yes that code will run even though we didn't assign it to a variable and we didn't invoke that variable 