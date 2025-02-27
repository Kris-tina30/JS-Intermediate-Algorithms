// 4. Fibonacci

// For a Fibonacci sequence starting at 0 and 1 add up all the values below 1,000,000.

// A Fibonacci sequence is an infinite series of numbers that is created by
//
// adding the last two numbers in the series. A series would start with the
// numbers 0 and 1 in place, followed by 1 (0+1), 2 (1+1), 3 (1+2), 5 (3+2), etc.

// 0 1 1 2 3 5 8 13 21...

//create new empty array
//use forloop start:  0; end: 100;
//use condition to hold first 2 numbers
// current num = sum of last two numbers
//1 (0+1), 2 (1+1), 3 (1+2), 5 (3+2)

let newFibArray = [];
for (let num = 0; num < 100; num++) {
  if (num == 0 || num == 1) {
    newFibArray[num] = num;
  } else {
    newFibArray[num] = newFibArray[num - 1] + newFibArray[num - 2];
  }
}
console.log(newFibArray);
