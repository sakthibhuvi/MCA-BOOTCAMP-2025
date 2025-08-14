 /** Q23
   This program prints a numeric pyramid pattern where numbers 
	 increase from the middle outwards and then decrease symmetrically. 
	 The pattern is centered and uses nested loops
	 
	 Problem Flow Summary
	Ask user for number of lines (n).
	For each line i from 1 to n:
	Print spaces to align the pyramid.
	Print increasing numbers (i to i + i - 1).
	Print decreasing numbers back to i.
	Move to the next line after printing each row.
	
Input / Output Example
Input:
Enter Number of Lines: 5

Output:
    1
   232
  34543
 4567654
567898765


	 
	 */
let n=Number(window.prompt("enter the number of liners"));
for (let i = 0; i <=n; i++) {
	let rows="";
	for(let s=1;s<=n-i;s++){
		rows=rows+""
	}
	for(let num=i;num<i+i;num++){
		rows=rows+num;
	}
	for(let num=i+i-2;num>=i;num--){
		rows=rows+num
	}
	console.log(rows);
	
	
}