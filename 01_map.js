var myArray = [1, 2, 3, 4];

myArray.map(el => el+1); // returns an array [2, 3, 4, 5]
myArray.map(() => 'b'); // returns an array ['b', 'b', 'b', 'b']

newArray = myArray.map(() => 'b'); // stores ['b', 'b', 'b', 'b'] to newArray