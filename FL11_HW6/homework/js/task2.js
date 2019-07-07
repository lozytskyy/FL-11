let a = +prompt('enter A');
let b = +prompt('enter B');
let c = +prompt('enter C');
if (isNaN(a)) {
    console.log('Side A - Not a Number!');
} else if (isNaN(b)) {
    console.log('Side B - Not a Number!');
} else if (isNaN(c)) {
    console.log('Side C - Not a Number!');
} else
	if (a <= 0) {
		console.log('Triangle doesn’t exist');
	} else if (b <= 0) {
		console.log('Triangle doesn’t exist');
	} else if (c <= 0) {
		console.log('Triangle doesn’t exist');
	} else {
		if (a + b <= c) {
			console.log('Triangle doesn’t exist');
		} else if (a + c <= b) {
			console.log('Triangle doesn’t exist');
		} else if (b + c <= a) {
			console.log('Triangle doesn’t exist');
		} else if (a !== b) {
			if (a !== c) {
				if (b !== c) {
					console.log('Normal triangle');
				}
			}
		} else if (a === b) {
			if (b === c) {
				console.log('Eequivalent triangle');
			} else {
				console.log('Isosceles triangle');
			}
		}
}