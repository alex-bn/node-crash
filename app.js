// EVENT LOOPS, ASYNC PATTERNS, EVENTS EMITTER AND STREAMS

// JavaScript is Synchronous and Single Threaded

console.log(1, 'First task');
setTimeout(() => {
    console.log(2, 'Second task');
}, 0);
console.log(3, 'Third task');
console.log(4, 'Fourth task');
