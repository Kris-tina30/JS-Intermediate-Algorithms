// 2. Shift the Values

// Given any array X, for example [2,1,6,4,-7], create an algorithm that shifts
// each number by one to the front. When your program is done the output for
// array [2,1,6,4,-7] should be [-7,4,6,1,2].

// use forloop start: 0; end: X.length - 1) / 2 = (5 - 1) / 2 = 2
// i have 2 values 0 і 1 (2 iterations)
// declare variable element to store, save element met value 0
// resign element with value X[i]
// X[i] = X[X.length - 1 - i] - change first and last element
// resign stored value X[i]

// for (let i = 0; i < (X.length - 1) / 2; i++) {
//   let element = 0;
//   element = X[i];
//   X[i] = X[X.length - 1 - i];
//  //X[0] = X[4 - 0] = X[4] = -7;
//   //X[1] = X[4 - 1] = X[3] = 4;
//   X[X.length - 1 - i] = element;
// }
// console.log(X);

//create new array
//use forloop start: 0; end: X.length - 1
//use ushift(X[i])method to add from the start

let newArray = [];
for (let i = 0; i < X.length; i++) {
  newArray.unshift(X[i]);
}
console.log(newArray);
