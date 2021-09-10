// const logMessage = () => {
//     console.log('log at callback 3 sec');
// };
// console.log('before setTimeout');

// setTimeout((x) => {
//     console.log(x);
//     console.log('внутри callback 1-SetTimeout');

// }, 2000, 50);

// console.log('after callback');
// // for (let index = 0; index < 100; index++) {
// //     console.log(index);
// // }

// setTimeout(() => {

//     console.log('2-SetTime');
// }, 1000);

// const logger = time => console.log(`Лог через ${time}ms `);

// const timerId = setTimeout(logger, 2000, 2000);

// const shouldCancelTimer = Math.random() > 0.3;
// console.log(shouldCancelTimer);

// if (shouldCancelTimer) {
//     clearTimeout(timerId);
// }