/** Q5
	 *  This program calculates the Volume and Surface Area of a sphere 
	 *  using the following formulas:
			Volume (V) = (4/3) × π × r³
			Area (A) = 4 × π × r²
	
	Problem Flow:
	Get r (radius) from user
	Calculate area using A = 4πr²
	Calculate volume using V = (4/3)πr³
	Display both values
	
	 Input / Output Example:
	Input:
	Enter Radius of Sphere: 7
	Output:
	Volume of Sphere: 1436.571429
	Area of Sphere  : 615.428571
	
*/

const radius=window.prompt("enter the radius to get Volume and area");
var Area;
 var Volume;


function  calculates(params) {
    Volume=(4/3)*Math.PI*Math.pow(radius,3);
    Area=4*Math.PI*Math.pow(radius,2)
    
}
calculates();
console.log(" volume of sphere " + Volume);
console.log(" area of sphere " + Area)
 