
/** Q3
	 * This program calculates Compound Interest using the formula:
 		F = P × (1 + i)ⁿ
 		Where:
			P = Principal amount
			i = Rate/100
			n = Number of years
 			Here, F is the final amount (principal + interest)
	
		 Problem Flow:
		Input P, R, and N from user
		Calculate i = R / 100
		Use formula F = P × (1 + i)^N
		Display the final compound amount
		
		Input / Output Example:
		Input:
		Enter Principal Value: 10000  
		Enter Rate of Interest: 10  
		Enter No. of Years: 2
		Output:
		Compound Interest 12100.00
*/

const principal_amount=window.prompt("enter the prinicipal amount");
const R=window.prompt("enter the I");
const n=window.prompt("enter the number of years")
const i=R/100;
var final;


function calculate() {

    final=principal_amount*Math.pow(1+i,n);

}
calculate();
console.log("compound interest" + final)