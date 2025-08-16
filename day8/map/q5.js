/*6. Map an array of numbers to an array of arrays containing incremental values
Input:
[2, 4, 3, 5]
Output:
[1, 2]
[1, 2, 3, 4]
[1, 2, 3]
[1, 2, 3, 4, 5]*/
const numbers = [2, 4, 3, 5];

const sequences = numbers.map(num => Array.from({ length: num }, (_, i) => i + 1));

console.log(sequences);
