let login = prompt('Enter email : ','' );
let passUser, passUserOld, passUserNew, passUserNew2;
let passAdmin, passAdminOld, passAdminNew, passAdminNew2;
let changePass;
const minLength = 6;
const n = 5;

if (login === null) {
	alert('Cancel');
} else if (login.length === 0) {
	alert('Cancel');
} else if (login.length < minLength) {
	alert('I don*t know any emails having name length less than 6 symbols');
} else if (login === 'user@gmail.com') {
	passUser = prompt('Enter password : ','' );
		if (passUser === null) {
			alert('Canceled');
		} else if (passUser.length === 0) {
		alert('Canceled');
		} else if (passUser === 'UserPass') {
			changePass = confirm('Do you want to change your password?');
				if (changePass) {
					passUserOld = prompt('Enter old password : ','' );
						if (passUserOld === null) {
							alert('Canceled');
						} else if (passUserOld.length === 0) {
						alert('Canceled');
						} else if (passUserOld === passUser) {
							
							passUserNew = prompt('Enter new password : ','' );
							if (passUserNew.length < n) {
									alert('It’s too short password. Sorry');
									} else {
										passUserNew2 = prompt('Enter new password again : ','' );
										if (passUserNew2 === passUserNew) {
											alert('You have successfully changed your password.');
										} else {
											alert('You wrote the wrong password.');
										}
									}
						} else {
							alert('You wrote the wrong password.');
							}
				} else {
					alert('You have failed the change');
				}
		} else {
			alert('Wrong password');
		}

} else if (login === 'admin@gmail.com') {
	passAdmin = prompt('Enter password : ','' );
		if (passAdmin === null) {
			alert('Canceled');
		} else if (passAdmin.length === 0) {
		alert('Canceled');
		} else if (passAdmin === 'AdminPass') {
			changePass = confirm('Do you want to change your password?');
				if (changePass) {
					passAdminOld = prompt('Enter old password : ','' );
						if (passAdminOld === null) {
							alert('Canceled');
						} else if (passAdmin.length === 0) {
						alert('Canceled');
						} else if (passAdminOld === passAdmin) {
							
							passAdminNew = prompt('Enter new password : ','' );
							if (passAdminNew.length < n) {
									alert('It’s too short password. Sorry');
									} else {
										passAdminNew2 = prompt('Enter new password again : ','' );
										if (passAdminNew2 === passAdminNew) {
											alert('You have successfully changed your password.');
										} else {
											alert('You wrote the wrong password.');
										}
									}
						} else {
							alert('You wrote the wrong password.');
							}
				} else {
					alert('You have failed the change');
				}
		} else {
			alert('Wrong password');
		}
} else {
	alert('I don’t know you');
}