const numbers = [1, 2, 2, 3, 4, 4, 5];

const unique = numbers.filter((num, index, arr) => arr.indexOf(num) === index);

console.log(unique);

