setInterval(() => {
    console.log('hello world');
}, 2000);
console.log('I will run first');
// process stays alive unless
// Kill process CONTROL + C
// unexpected error
// every 2 seconds the events loop is invoking the callback and that's why we're not exiting 
// setInterval is asynchronous and the callback is offloaded and moves to the back of the line 