//// use node app.js and not nodemon.js

// started operating system process 
console.log('first');
setTimeout(() => {
    console.log('second');
}, 0);
console.log('third');
// completed and exited operating system process

// the two comments -> started .. / completed .. are just a way of saying that the process starts, is completed and than EXITED.

// because the timeout is set to 0 you'd think that the order is first-second-third but actually setTimeout is asynchronous and the callback gets offloaded and only when we're done with our immediate code, only then the callback gets invoked