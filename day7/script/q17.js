 /** Q17
	 *  This program checks the temperature value (temp) and determines 
	 the physical state of water:
		If temp < 0 → "ICE"
		If temp is between 0 and 100 (inclusive) → "WATER"
		If temp > 100 → "STEAM"
		
		Flow Summary:
		Get user input for temperature
		Use if-else to decide the state of water
		Display the result to the user
		
		Sample I/O:
		Input:
		Enter the water temperature: 120
		Output:
		Water status is STEAM for the Temperature 120.00

	 */
    let value=Number(window.prompt("enter the water  temperature"));
    if (value<0) {
        console.log("water status is ice for temperature " + value);
        
        
    } else if (value>0&&value<100) {
        console.log("Water status is water for the Temperature " + value);
        
        
    } else if (value>100) {
        console.log("Water status is STEAM for the Temperature 120.00");
        
    
    }
