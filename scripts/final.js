// create the variables (arrays)
let temps = [];// creating an array
const weekDays = ["Mon","Tues"]; // creating and assign values


// step 1 - create a fn 
function converTemp(){
    console.log("Converting ... ");
    // step 2 - user inputs the scale C or F
    //let scale = prompt("Enter C or F");
    //console.log(scale);

    for(let i=0;i<2;i++){ // loop to travel the array
        let temp = prompt("Enter the temp ");
        console.log(temp);// display on the console the input of the user
        let converted = celsiusToFar(temp); // using the fn to convert
        temps.push(converted);// saving the converted temp into the array
        document.getElementById("temperatures").innerHTML+=`
        <li>${weekDays[i]} -  ${temp} -> ${temps[i]}</li>
        `; // displaying the info on the HTML
    }
}

function celsiusToFar(celsius){
    return celsius * 2; // change the formula
}