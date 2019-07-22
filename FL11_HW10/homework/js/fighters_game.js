function Fighter(props) {

	let wins = 0;
	let loses = 0;
	let hundred = 100;
	let currHP = parseInt(props.hp);

return {	
			get getName() {
				return props.name;
			},
			get getDamage() {
				return props.damage;
			},
			get getHealth() {
				return currHP;
			},
			get getAgility() {
				return props.agility;
			},

		attack(defender) {

			let chanse = hundred - defender.getAgility; 
			let rndValue = Math.floor(Math.random() * hundred) + 1; 
			if (rndValue <= chanse) {
				console.log(this.getName + ' makes ' + this.getDamage + 'HP damage to ' + defender.getName);
				defender.dealDamage(this.getDamage);
			} else {
				return console.log(this.getName + ' attack missed'); 
			}
		},

		logCombatHistory() {
			return console.log('Name: ' + this.getName + ', Wins: ' + wins +', Losses: ' + loses);
		},

		heal() {
			if (currHP <= 0) {
				currHP = props.hp; 
				console.log('Name: ' + this.getName + ' Healed to ' + currHP);
			} else {
				console.log('He has enough of HP');
			}
			return currHP;
		},

		dealDamage: function dealDamage(damage) {
			if (currHP - damage < 0) {
				currHP = 0;
			} else {
				currHP = currHP - damage;
				console.log('CURRENT HP of ' + this.getName + ' = ' + currHP);
			}
			return currHP;
		},

		addWin() {
			wins++;
			return wins;
		},

		addLoss() {
			loses++;
			return loses;
		}
	}
	
}

const myFighter = new Fighter({name: 'Alex', damage: 25, hp: 100, agility: 25});
const myFighter1 = new Fighter({name: 'Nazar', damage: 30, hp: 75, agility: 45});

function battle(fighter1, fighter2) {

	if (fighter1.getHealth === 0) {
		console.log(fighter1.getName + ' is dead and can not fight');
	} else if (fighter2.getHealth === 0) {
		console.log(fighter2.getName + ' is dead and can not fight');
			}

			while (fighter1.getHealth > 0 && fighter2.getHealth > 0) {
				console.log(fighter1.attack(fighter2));
				if (fighter2.getHealth > 0) {
					console.log(fighter2.attack(fighter1));
				}
			} 
			
			if (fighter1.getHealth > fighter2.getHealth) {
				fighter1.addWin(); 
				fighter2.addLoss();
			} else {
				fighter2.addWin(); 
				fighter1.addLoss();
		}
}

battle(myFighter, myFighter1);