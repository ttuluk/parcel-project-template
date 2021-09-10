// const logger = time => console.log(`Лог каждые ${time}ms - ${Date.now()}`);
// // console.log(logger);
 
// console.log('before setinterval');
// // setInterval(logger, 5000, 5000)
// console.log('after setInterval');

// const intervalId = setInterval(logger, 2000, 2000);
// const shouldCancelInterval = Math.random() > 0.3;
// console.log(shouldCancelInterval);

// if (shouldCancelInterval) {
//     clearInterval(intervalId);
// }
function multiply(a, b) {
    return a * b;
};
function square(n) {
    return multiply(n, n);
}
function printSquare(n) {
    var squared = square(n);
    console.log(squared);
}

printSquare(4);