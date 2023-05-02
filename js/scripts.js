function multiply(km, number1) {
	return km * number1;
}

function multiply(km, number2) {
	return km * number2;
}

const km = parseInt(prompt("Enter a unit:"))
const number1 = 0.62;
const number2 = 3280.8;
const a = multiply(km, number1);
const b = multiply(km, number2);

let miString = km + " kilometers" + " = " + a + " miles";
let ftString = km + " kilometers" + " = " + b + " feet";

window.alert(miString + ". " + ftString + ". ");