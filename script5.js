// 5. Remove the Negative

// Given any array X, for example [1,-2,4,1], remove the negative numbers,
// so that the output becomes: [1,4,1].

//use forloop start: 0 ; end: X.lenght;
//use condition
//if num<0 -> remove(use splice)
//current num decrement to 1, btcouse splice effect on array
// and after delete element next element wiil move on its place.
// print array

let X = [1, -2, 4, 1];
for (let num = 0; num < X.length; num++) {
  console.log(X[num]);

  if (X[num] < 0) {
    X.splice(num, 1);
    num = num - 1;
  }
}
console.log(X);
