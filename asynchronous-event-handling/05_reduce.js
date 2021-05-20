const myArray = [1, 2, 3, 4, 5];
// m.reduce((acc, elem) => acc += elem, startIndexOfAcc)
myArray.reduce((accumulator, currentElement) => accumulator += currentElement, 0); // Start accumulator at 0 [2nd parameter] and then sum all element
