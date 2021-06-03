// without currying
const multiply = (a, b) => a*b;
console.log(multiply(3, 5));

// With currying
const curriedMultiply = a => b => a*b;
console.log(curriedMultiply(5)(6));

// we can chain functions like this
const curriedMultiplyBy5 = curriedMultiply(5);
console.log(curriedMultiplyBy5(7));

/*
function add (a, b) {
  return a + b;
}
function add (a) {
  return function (b) {
    return a + b;
  }
}
add(3)(4);

var add3 = add(3);
add3(4);
*/