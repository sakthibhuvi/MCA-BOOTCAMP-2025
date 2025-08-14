  /** Q24
	 * This program reads n numbers into an array, calculates the average 
	 of those numbers using a loop, and displays the result. 
	 It demonstrates how to use arrays and object-oriented concepts 
	 like classes and methods in Java.
	 
	Problem Flow
	Read input size n
	Read n elements into array
	Loop through array to compute sum
	Divide sum by n to get average
	Display result
	
	 Input / Output Example
Input:
Enter how many numbers: 5
Enter the numbers:
10
20
30
40
50

Output:
Average of the numbers: 30.00


	 */

let n =Number(window.prompt("how many numbers "));
let numbers=[];
let sum=0;
for( let i=0;i<n;i++){
	let num=Number(window.prompt(`enter the ${i+1}`));
	numbers.push(num);
	sum=sum+num;

}
let average=sum/n;
console.log("average of number is"+ average);
