if (document.getElementById('userid') && document.getElementById('password')) { // Username and password inputs exist
  var p = document.getElementById('password');
  var u = document.getElementById('userid');
  init();
} else {
  console.log('Chrome extension "Wells Fargo - Remember username" is out of date and is no longer functioning. Developer must update.'); // Wells Fargo homepage has been updated, breaking extension functionality
}

function init() {
  u.addEventListener('change', storeID);
  if (!(localStorage.getItem('userid') === null || undefined || '' || 0)) { // localStorage key exists and is not empty
    fillID();
  } else { // Does not exist or is empty
    u.focus();
  }
}

function fillID() {
  u.value = localStorage.userid;
  p.focus();
}

function storeID() {
  localStorage.setItem('userid', u.value);
}
