(function() {
  'use strict';

  function init() {
    u.addEventListener('change', storeID);
    var userid = localStorage.getItem('userid');
    if (userid !== null && typeof userid !== 'undefined' && userid !== '' && userid !== ' ') { // localStorage key exists and is not empty or a single space
      fillID();
    } else { // Does not exist or is empty or a single space
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

  if (document.getElementById('userid') && document.getElementById('password')) { // Username and password inputs exist
    var p = document.getElementById('password');
    var u = document.getElementById('userid');
    init();
  } else {
    console.log('Chrome extension "Wells Fargo - Remember username" is out of date and is no longer functioning. Developer must update.'); // Wells Fargo homepage has been updated, breaking extension functionality
  }

}());
