let ms = prompt("enter the marital status");
if (ms.toLowerCase() == "married") {
    console.log("eligible");

} else if (ms.toLowerCase() == "unmarried") {
    console.log("enter the below details")

    var i = prompt("enter the male or female")
    if (i.toLowerCase() == "male") {
        var age = window.prompt("enter the age")
        if (age => 25) {
            console.log("male eligible");

        }
        else {
            console.log("invalid")
        }


    } else if (i.toLowerCase() == "female") {
        var age = prompt("enter the age")
        if (age => 35) {
            console.log("female eligible");

        }
        else {
            console.log("invalid")
        }


    }
    else {
        console.log("incorrect");

    }
}
else {
    console.log("invalid");

}