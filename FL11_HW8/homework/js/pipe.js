function pipe (val, ...args) {
	let k = val;
	let i = 0;

	for (i = 0; i < args.length; i++) {
		k = args[0](k);
	}
	return k;
}
	function addOne (x) {
		return x+1;
		}

pipe(7, addOne, addOne, addOne, addOne);


