/*
Input:
["hello", "world", "javascript"]
Output:
['h e l l o', 'w o r l d', 'j a v a s c r i p t']*/

let words=["hello", "world", "javascript"];
let space=words.map(res=>   res.split("").join(" ")
);
console.log(space);
