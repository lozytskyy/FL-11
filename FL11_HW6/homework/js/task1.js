let a1 = +prompt('enter A1');
let a2 = +prompt('enter A2');
let c1 = +prompt('enter C1');
let c2 = +prompt('enter C2');
let b1 = +prompt('enter B1');
let b2 = +prompt('enter B2');
const d = 2;
if ((a1 + b1) / d === c1) {
	if ((a2 + b2) / d === c2) {
		console.log(true);
	} else {
		console.log(false);
		}
	} else {
	console.log(false);
}