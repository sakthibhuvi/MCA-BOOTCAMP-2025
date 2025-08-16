/*. Map an array of prices to formatted currency strings with dollar sign
Input:
[15.99, 29.5, 7.25]
Output:
['$15.99', '$29.50', '$7.25']
*/


let n=[15.99, 29.5, 7.25];
let a=n.map(p=>`$${n}`);
console.log(a)