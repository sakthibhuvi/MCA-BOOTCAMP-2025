/**Q22
   This program prints a right-aligned triangle star pattern using 
	 nested for loops. The number of lines (n) is provided by the user.
	 
	Problem Flow
	Get number of lines from user.
	Loop from 1 to n (line-by-line).
	For each line:
	Print n - i spaces.
	Print i stars.
	Go to the next line.

	Input / Output Example
	Input:
	How many Lines? 5
	Output:
    *
   **
   ***
  ****
*****

	 */
    let n =Number(window.prompt("enter the lines"));
    for(let i=1;i<=n;i++){
        let row="";
        for(let j=1;j<=n-i;j++){
            row=row+" "

        }
        for(k=1;k<=i;k++){
            row=row+"*"
        }
        console.log(row)
    }