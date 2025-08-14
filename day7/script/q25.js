/** Q25
	 * This program reads n integers into an array and finds the second
	 largest number among them. It uses a class with methods for input, 
	 processing (finding second largest), and output. It showcases 
	 array handling and object-oriented principles in Java.
	 
	Problem Flow 
	Read input size n
	Store values in array
	Use loop to compare and find:
		largest
		secondLargest
	Display result
	
	Input / Output Example
Input:
Enter how many numbers: 6
Enter the numbers:
10
45
22
45
8
19

Output:
Second largest number is: 22


	 */
let n = parseInt(prompt("Enter how many numbers:"));
let numbers = [];

for (let i = 0; i < n; i++) {
    let num = parseFloat(prompt(`Enter number ${i + 1}`));
    numbers.push(num);
}

let largest = -Infinity;
let secondLargest = -Infinity;

for (let num of numbers) {
    if (num > largest) {
        secondLargest = largest;
        largest = num;
    } else if (num > secondLargest && num < largest) {
        secondLargest = num;
    }
}

if (secondLargest === -Infinity) {
    console.log("No second largest number found.");
} else {
    console.log(`Second largest number is: ${secondLargest}`);
}