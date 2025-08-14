/** Q20
	 * This program calculates and displays the first n numbers in the 
	 Fibonacci sequence. Each number is the sum of the previous 
	 two numbers.
	 
	 Code Flow 
	Input: number of terms n
	Initialize first two terms: f1 = 1, f2 = 1
	Loop from i = 3 to n:
		Find next term using f = f1 + f2
		Shift values for next round
	Display all terms
	
	Sample Input/Output
 	Input:
	How many Fibonacci terms? 10
	Output:
	1 1 2 3 5 8 13 21 34 55

	 */
 let value=window.prompt("enter the number of term");
 let f1=1;
 let f2=2;
 let result=f1+ f2;
 for(let i=3;i<=value;i++){
    let f=f1+f2;
    result+=" " + f
    f1=f2;
    f2=f
 }
 console.log(result)
