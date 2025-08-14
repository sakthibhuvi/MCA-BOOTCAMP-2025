/** Q1
	 * Write a program to read the radius of a circle and calculate 
	 * its area using the formula:
		A = π * r²
	
	Problem Flow:
	1. User inputs radius (r)
	2. Program calculates: area = (22.0 / 7) * r * r
	3. Output displays area with radius
	
	Input / Output Example:
	Input:
	Enter Radius of Circle: 7
	Output:
	Area of Circle with Radius 7.0000 is 154.0000
*/
const radius=window.prompt("enter the radius");
var area;

function calculate() {
    area=(22.0/7) *radius*radius;

    
}
calculate()
console.log("area of the circle with radius 7.0000 is" +  area)