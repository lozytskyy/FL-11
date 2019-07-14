function getMin () { 
	let i;
	let min = Infinity;
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i] < min) {
      min = arguments[i];
    }
  }
  return min;
}

getMin(-5, -1, -11, 0);