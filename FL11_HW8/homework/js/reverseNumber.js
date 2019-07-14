function reverseNumber (a) {
	
	if ( parseInt(a) === a && a >= 0 ) {
		let rv = 0;
		while (a) { 
			rv = rv * 10;
			rv = rv + a % 10;
			a = Math.floor(a / 10);
		}
		return rv;
	} else {
	let rvm = 0;
	let b = Math.abs(a);
		while (b) { 
			rvm = rvm * 10;
			rvm = rvm + b % 10;
			b = Math.floor(b / 10);
		}
		return -Math.abs(rvm);
	}
}

reverseNumber(-456);