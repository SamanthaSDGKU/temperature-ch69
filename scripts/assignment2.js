// constants
const city = "San Diego";

//1. create the fn that convert C to F
function celsiusToFar(celsius){
    return celsius * 2; 
}
//2. create variable for each day
let mondayC = 30;
let tuesdayC = 40;

//3. Call the fn for everyday
let mondayF = celsiusToFar(mondayC);//60
let tuesdayF = celsiusToFar(tuesdayC);

//4. create the output
let output = "";
output = `<h2>${city} </h2>`;
output += `<p>Monday: ${mondayC} - ${mondayF}</p>`;
output += `<p class="hot">Tuesday: ${tuesdayC} - ${tuesdayF} ☀️</p>`;
document.getElementById("forecast").innerHTML= output;