/* Filter out falsy values from an array
Input:
[0, "", false, null, undefined, 1, "hello"]
Output:
[1, "hello"]*/
const values = [0, "", false, null, undefined, 1, "hello"];

const truthyValues = values.filter(Boolean);

console.log(truthyValues);
