let sum = 0;
const arguments = process.argv;

arguments.forEach((element) => {
  sum += !isNaN(element) ? Number(element) : 0;
});

console.log(sum);

/* ***************************************** */

// let sum = 0;
// const arguments = process.argv;

// for (let index = 0; index < arguments.length; index++) {
//   // if (!isNaN(arguments[index])) sum += Number(arguments[index]);

//   sum += !isNaN(arguments[index]) ? Number(arguments[index]) : 0;
// }

// console.log(sum);

/* ***************************************** */

// console.log(process.argv);

// let sum = 0;
// for (let i = 2; i < process.argv.length; i++) {
//   const tempValue = Number(process.argv[i]);
//   if (!isNaN(tempValue)) {
//     sum += tempValue;
//     // console.log("sum in loop: ", sum);
//   }
// }

// console.log(sum);

/* ***************************************** */

// let sum = 0;

// for (let i = 2; i < process.argv.length; i++) {
//   const number = Number(process.argv[i]);

//   if (!isNaN(number)) {
//     sum += number;
//   }
// }

// console.log(sum);
