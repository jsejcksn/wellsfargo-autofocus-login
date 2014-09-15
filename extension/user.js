if (!localStorage.userid) {
	storeFillID();
	} else {
		fillID();
		}

function fillID() {
	document.getElementById('userid').value = localStorage.userid;
	document.getElementById('password').focus();
	}

function storeFillID() {
	var username = prompt('Please enter your Username to autofill at future visits', 'username');
	if (username && username != 'username' || '') {
		localStorage.setItem('userid', username);
		document.getElementById('userid').value = localStorage.userid;
		document.getElementById('password').focus();
		} else if (username) {
			document.getElementById('userid').value = username;
			document.getElementById('password').focus();
			} else {
				document.getElementById('userid').focus();
				}
	}
