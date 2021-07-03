const _ = require('lodash')

const array = [1]
const letters = ['a', 'b', 'c', 'd', 'e', 'f']
const falsey = [false, null, '', undefined, NaN, 0, 9, 'Bob', ['jupiter']]

//1// _.chunk(array, [size=1]) -> creates an array of elements spit into groups the length of size
console.log(_.chunk(letters, 2)) // split evenly when enough elements
console.log(_.chunk(letters, 5)) // else the final chunk will we the remaining elements

//2// _.compact(array) -> creates an array with all falsy values removed
console.log(_.compact(falsey)) //;

//3// _.concat(array,, [values]) -> creates a new array concatenating array with any additional arrays and/or values
const newArray = _.concat(array, 2, [3, 4], [[5]])
console.log(_.concat(newArray))

//4// _.difference(array, [values]) ->
