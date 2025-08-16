/*3. Map an array of arrays to arrays with their sums.
Input:
[[1, 2, 3], [4, 5], [6, 7, 8]]
Output:
[6, 9, 21]*/
let number = [[1, 2, 3], [4, 5], [6, 7, 8]];

const res= number.map(inner => inner.reduce((sum, num) => sum + num, 0));

console.log(res);

