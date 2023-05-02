function multiply(unit, number1) {
	return unit * number1;
}

function multiply(unit, number2) {
	return unit * number2;
}

function multiply(unit, number3) {
	return unit * number3;
}

function multiply(unit, number4) {
	return unit * number4;
}

function multiply(unit, number5) {
	return unit * number5;
}

function multiply(unit, number6) {
	return unit * number6;
}

const unit = parseInt(prompt("Enter a unit:"))
const number1 = 0.62;
const number2 = 3280.8;
const number3 = 1.057;
const number4 = 0.264;
const number5 = 0.0042
const number6 = 0.0338;
const a = multiply(unit, number1);
const b = multiply(unit, number2);
const c = multiply(unit, number3);
const d = multiply(unit, number4);
const e = multiply(unit, number5);
const f = multiply(unit, number6);

let miString = unit + " kilometers" + " = " + a + " miles";
let ftString = unit + " kilometers" + " = " + b + " feet";
let qtString = unit + " liters" + " = " + c + " quarts";
let galString = unit + " liters" + " = " + d + " gallons";
let cupString = unit + " milliliters" + " = " + e + " cups";
let ozString = unit + " milliliters" + " = " + f + " ounces";

window.alert(miString + ". " + ftString + ". " + qtString + ". " + galString + ". " + cupString + ". " + ozString + ". ");