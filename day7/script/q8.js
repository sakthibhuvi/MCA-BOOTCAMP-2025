/** Q8
	 * This program calculates the sum of the first n odd integers 
	 (Example: 1 + 3 + 5 + ... + (2n - 1)).
	 
	 Problem Flow:
	Input n from user
	Loop from 1 to (2n−1) in steps of 2
	Accumulate the sum
	Print the result
	
	Input / Output Example:
	Input:
	Enter how many odd numbers to sum: 5
	Output:
	Sum of first 5 odd numbers is 25
	(1 + 3 + 5 + 7 + 9 = 25)

	 */
    const n=window.prompt("enter the number");
    let sum=0;

    for(let i=1;i<=(2*n-1);i+=2){
sum=sum+i
    }
    console.log(" sum of first " + n + " odd number is " + sum) ;
    