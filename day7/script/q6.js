/** Q6
	 * This program allows the user to enter 3 test marks of a student, 
	 calculates the total and average, and displays the result.
	 
	Problem Flow:
	Get 3 marks from user
	Add marks → total
	Divide total by 3.0 → average
	Display total and average
	
	Input / Output Example:
	Input:
	Enter Mark 1: 80  
	Enter Mark 2: 75  
	Enter Mark 3: 85  
	Output:
	Total Marks   = 240  
	Average Marks = 80.0
	 */
const sub1=window.prompt("enter the tamil mark");
const sub2=window.prompt("enter the english mark");
const sub3=window.prompt("enter the Maths mark");
 var total;
 var average;


function Calculate(params) {
total=Number(sub1) + Number(sub2)+ Number(sub3);
average=total/3;

    
}
Calculate();
console.log("TOTAL MARKS" +  total);
console.log("AVERAGE MARKS " + average);

