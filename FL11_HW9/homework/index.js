/*0. Write function, which returns array of numbers from string parameter.*/
function getNumbers (a0) {
	let b0 = a0.replace(/[^0-9]+/g, '');

	return b0.split('');
}
//getNumbers('n1um3ber95');


/*1. Write a function that could receive different amount of parameters (n1, n2, ...n) that have different data types (string, number, boolean, etc.) and returns an object where keys are data types of received parameters and value are their count.*/
function findTypes (...args) {
	let a1 = {};
	let i;

	for (i = 0; i < args.length; i++) {
		switch (typeof args[i]) {
		
		case 'object':
		a1.object = a1.object+1 || 1;
		break;

		case 'number':
		a1.number = a1.number+1 || 1;
		break;

		case 'string':
		a1.string = a1.string+1 || 1;
		break;

		case 'boolean':
		a1.boolean = a1.boolean+1 || 1;
		break;

		case 'symbol':
		a1.symbol = a1.symbol+1 || 1;
		break;

		default:
		break;
		}
	}

	return a1;
}
//findTypes(null, {}, 456, 'gfdgfds', 5, 'hello', 67);


/*2. Write function, which iterates over array and executes function on each element.*/
function executeforEach(mass2, fnc2) {
	let i;
	for (i = 0; i < mass2.length; i++) {
		fnc2(mass2[i]);
	}  
}
//executeforEach([1,2,3], function(el) { console.log(el) });


/*3. Write function, which returns transformed array based on function, which passed as a parameter. Reuse function from task 2.*/
function mapArray (mass3, fnc3) {
    let outmass3 = [];
    executeforEach(mass3, function(fncmain) {
        let a3 = fnc3(fncmain);
        outmass3.push(a3); 
    });
    return outmass3; 
}

//mapArray([12, 25, 8], function(el) { return el + 3 });


/*4. Write function, which returns filtered array based on function, which passed as a parameter. Reuse function from task 2.*/
function filterArray(mass4, fnc4) {
  let outmass4 = [];
 
  executeforEach(mass4, function(fncmain) {
        if (fnc4(fncmain)) {
            outmass4.push(fncmain);
        } else {
			console.log('false');
        }
  });
  return outmass4;

}
//filterArray([13, 2, 5, 1, 8], function(el) { return el > 3 });


/*5. Write function, which returns formatted date.*/
function showFormattedDate(a5) {
	let date = a5.getDate();
	let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'];
	let month = months[a5.getMonth()];
	let year = a5.getFullYear();

	return 'Date: ' + month + ' ' + date + ' ' + year;
}
//showFormattedDate(new Date('2019-01-27T01:10:00'));


/*6. Write function, which returns Boolean value, is received string parameter can be converted to valid date.*/
function canConvertToDate(a6) {
	let checkData6;
	let res6;
  checkData6 = new Date(a6);
  res6 = !isNaN(checkData6.getTime());
  return res6;
}
//canConvertToDate('2016-13-18T00:00:00') // false
//canConvertToDate('2016-03-18T00:00:00') // true


/*7. Write function, which returns difference between two dates in days */
function daysBetween(a7, b7) {
	let res7;
	let msec = 1000;
	let sec = 60;
	let min = 60;
	let hrs = 24;

    res7 = Math.abs(a7 - b7);
    res7 = res7 / (msec * sec * min * hrs);

	return Math.round(res7);
}
//daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00')); // 32


/*8. Write function, which returns amount of people, who are over 18. Reuse function from task 4,7 */
let data = [
	{
	'_id': '5b5e3168c6bf40f2c1235cd6',
	'index': 0,
	'birthday': '2016-03-18T00:00:00',
	'eyeColor': 'green',
	'name': 'Stein',
	'favoriteFruit': 'apple'
	},
	{
	'_id': '5b5e3168e328c0d72e4f27d8',
	'index': 1,
	'birthday': '1991-02-11T00:00:00',
	'eyeColor': 'blue',
	'name': 'Cortez',
	'favoriteFruit': 'strawberry'
	},
	{
	'_id': '5b5e3168cc79132b631c666a',
	'index': 2,
	'birthday': '1984-04-17T00:00:00',
	'eyeColor': 'blue',
	'name': 'Suzette',
	'favoriteFruit': 'apple'
	},
	{
	'_id': '5b5e31682093adcc6cd0dde5',
	'index': 3,
	'birthday': '1994-04-17T00:00:00',
	'eyeColor': 'green',
	'name': 'George',
	'favoriteFruit': 'banana'
	}
]

function getAmountOfAdultPeople(data) {
	let age = 18;
	let days = 365;
	let dataNow = new Date();

	return filterArray(data, function (fnc8) {
		let dataNew = new Date(fnc8['birthday']);
		return Math.round(daysBetween(dataNow, dataNew) / days) > age;
	}).length;
}


/*9. Write function, which returns array of keys of an object.*/ 
function keys(object) {
	let mass9 = [];
	let i;
	for (i in object) {
	if (i) {
		mass9.push(i);
		}
	}
	return mass9;
}
//keys({keyOne: 1, keyTwo: 2, keyThree: 3}); // returns [“keyOne”, “keyTwo”, “keyThree”]


/*10. Write function, which returns array of values of an object.*/
function values(object) {
	let mass10 = [];
	let i;
	for (i in object) {
	if (i) {
		mass10.push(object[i]);
		}
	}
	return mass10;
}
//values({keyOne: 1, keyTwo: 2, keyThree: 3}); // returns [1, 2, 3]