const myArray = [1, 3, 5, 7, 9]

myArray.find(el => el === 5) // Stops as soon as 5 is found and returns it
myArray.find(el => el > 4) // Stops at 5 returns it 5

const peopleArray = [{id: 1}, {id: 2}, {id: 3}];
peopleArray.find(person => person.id === 2); // Returns {id: 2}