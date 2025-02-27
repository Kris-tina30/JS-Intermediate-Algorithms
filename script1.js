// 1. Addition

// Add all the values between 200 and 2700 (inclusively) that are divisible by 3 or 5,
// but not both 3 and 5. To solve this task you might want to use the modulus operator.

// declare variable let sum=0
//  use forloop start: 200 end: 2700
// inside loop use first condition  num%3 === 0 || num%5===0
// second condition exclude num (from first condition) divisible both 3 and 5 !(num % 3 === 0 && num % 5 === 0)
// general condition: first  &&  second
// true -> sum+=num

let sum = 0;
for (let num = 200; num <= 2700; num++) {
  if ((num % 3 === 0 || num % 5 === 0) && !(num % 3 === 0 && num % 5 === 0)) {
    sum += num;
    console.log(sum);
  }
}
