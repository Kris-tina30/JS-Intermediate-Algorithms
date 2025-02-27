// 3. FizzBuzz

// Create an algorithm that inserts the numbers from 1 to 135 into an array,
//  while replacing the values that are divisible by 3 with the word "Fizz",
// the numbers that are divisible by 5 with the word "Buzz", and the numbers that are divisible with 3 and 5 with the word "FizzBuzz".

// Your output should look like [1,2, 'Fizz',4, 'Buzz', 'Fizz',7, 8, ...]

//create new empty Array
//Use fotloop start: 1, end: 135
//use condition
//num%3 && num%5 replase to "FizzBuzz"
//num%3 replase to "Fizz"
//num%5 replase to "Buzz"
//else push num
//print array

let newArray = [];
for (let i = 1; i <= 135; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    newArray.push("FizzBuzz");
  } else if (i % 5 === 0) {
    newArray.push("Buzz");
  } else if (i % 3 === 0) {
    newArray.push("Fizz");
  } else {
    newArray.push(i);
  }
}
console.log(newArray);
