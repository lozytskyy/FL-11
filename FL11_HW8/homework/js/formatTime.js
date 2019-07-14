function formatTime (a) {
	if (Number.isInteger(a)) {
		
			let h = Math.floor(a / 60);
			let m = a % 60;
			let d = Math.floor(h / 24);
			h = h % 24;
		return console.log(d + ' day(s) ' + h + ' hour(s) ' + m + ' minute(s)');
	} else {
		return 0;
	}
}

formatTime(3601);