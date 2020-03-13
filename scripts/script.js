// Equation is °C = 5/9 (°F - 32).
// Declared degFahren variable with the value of the user's input
let degFahren = prompt("Enter the degrees in Fahrenheit");
// Declared degCel variable
// let degCel;
// create function degCel with parameter of degFahren
function degCel(degFahren) {
   return (5 / 9) * (degFahren - 32);
}
// store the degCel function with the degCel argument into a new variable named "processedDegCel"
processedDegCel = degCel(degFahren);

let msg = `${degFahren}\xB0 Fahrenheit is ${processedDegCel}\xB0C`;      
if (degFahren < 69) {
  alert(`${msg}\n Oh that's cold!`);
} else if (degFahren > 69 && degFahren < 83) {
  alert(`${msg}\n Temperature is just right!`);
} else {
  alert(`${msg}\n Its way too hot!`);
}


