// 6. Communist Censorship

// Given the array of strings X = ['Man', 'I','Love','The','Matrix','Program'],
// replace every letter of the word Program with *, so the output would be
// ['Man', 'I','Love','The','Matrix','*******']. Then make your
// algorithm work for any word of your choice

//create function replaceToStar
// declarate an array
//use forloop start:0; end: array.lenght
//condition if X[i]= word->
// replase  into * = X[i].length

let X = ["Man", "I", "Love", "The", "Matrix", "Program"];

function replaceToStar(word) {
  for (let i = 0; i < X.length; i++) {
    if (X[i] === word) {
      X[i] = "*".repeat(X[i].length);
    }
  }
  return X;
}
console.log(replaceToStar("Program"));
