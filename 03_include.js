// Reference check

//Primitive types (string, boolean, null, undefined. number, symbol). They are all referenced inside js memory bank
// So, whenever we create something of primitive type, it points to the reference inside memory bank
// var a = 2, points to the number 2 inside memory bank
// var b = a, => a, b both points to 2 inside memory bank
// now if we change a = 3, now a will point to 3 and b will still be pointing to 2 in memory bank
const myArray = [1, 2, 3, 4, 5];

myArray.includes(3) // True | because 3 is in myArray

myArray.includes(2, 3) // False | checks if 2 is included in myArray but only checks from 3rd index [4, 5]


// Objects [unique] when instantiated, gets its own reference
const newArray = [{id: 1}, {id: 2}, {id: 3}]
newArray.includes({id: 2}) // False | because the reference of {id: 2} is different from the {id: 2} inside includes.

const o1 = {id: 1};
const o2 = {id: 2};
const o3 = {id: 3};

const newestArray = [o1, o2, o3]
newArray.includes(o1) // True | same reference