/*2. Map an array of numbers to "even" or "odd" strings.
Input:
[1, 2, 3, 4, 5]
Output:
['odd', 'even', 'odd', 'even', 'odd']*/
let number=[1, 2, 3, 4, 5];
let res=number.map(num=>(num%2==0?"even":"odd"));
console.log(res);

