var p = document.getElementById('password');
var u = document.getElementById('userid');

u.addEventListener('change', storeID);
if (!(localStorage.getItem('userid') === null) && !(localStorage.userid == '')) { // Exists and not empty
	fillID();
	} else { // Does not exist or is empty
		u.focus();
		}

function fillID() {
	u.value = localStorage.userid;
	p.focus();
	}

function storeID() {
	localStorage.setItem('userid', u.value);
	}
