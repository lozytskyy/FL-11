let game = confirm('Do you want to play a game?');
let userNumber, userNumber2; 
let playAgain, playAgain1;
let play = 1;
let money1 = 25;
let money2 = 50;
let money3 = 100;
let money4 = 200;
let a, x;
let y = 0;
let n = 4;
let j = 2;
const key1 = 9;
const key2 = 13;

if (game) {
while (play === 1) {

	a = Math.floor(Math.random() * key1);
	y = 0;

		for (let i = 1; i < n; i++) {
			if (i === 1) {
				x = money3;
			} else if (i === j) {
				x = money2;
			} else {
				x = money1;
			}
userNumber = +prompt('Enter 0 to 8: \n AttLeft: ' + (n-i) + '\n TotalPrz: ' + y + '$\n PossbPrz: ' + x + '$ \n ','');
			if (userNumber === a) {
			playAgain = confirm('Congratulation, you won! Your prize is: ' + x + '$. Do you want to continue?');
				y = x;
				if (playAgain) {
					let b = Math.floor(Math.random() * key2); 

					for (let i = 1; i < n; i++) {
						if (i === 1) {
							x = money4+y;
						} else if (i === j) {
							x = money3+y;
						} else {
							x = money2+y;
						}
userNumber2 = +prompt('Enter 0 to 12: \n AttLeft: ' + (n-i) + '\n TotalPrz: ' + y + '$\n PossbPrz: ' + x + '$ \n ','');
						if (userNumber2 === b) {
							alert('Congratulation, you won! Your prize is: ' + x + '$');
							break;
						} else {
							alert('Try again!');
							}
					}
					break;

				} else {
					alert('Thank you for your participation. Your prize is:' + x + '$');
					play === 0;	
					break;
				}

			} else {
				alert('Try again!');
				}
		} 

	playAgain1 = confirm('Do you want to play again?');
		if (playAgain1) {
			play === 1;
		} else {
			alert('You did not become a billionaire, but can.');
			play === 0;
			break;
		}
}
	} else {
		alert('You did not become a billionaire, but can.');
} 