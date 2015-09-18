(function() {
  'use strict';

  function init() {
    if (u.value !== '') { // Username is not empty
      console.log('Username remembered');
      p.focus();
    } else { // Is empty
      console.log('Enter your username');
      u.focus();
    }
  }

  if (document.getElementById('userid') && document.getElementById('password')) { // Username and password inputs exist
    var p = document.getElementById('password');
    var u = document.getElementById('userid');
    init();
  } else {
    console.log('Chrome extension "Wells Fargo - Remember username" is out of date and is no longer functioning. Developer must update.'); // Wells Fargo homepage has been updated, breaking extension functionality
  }

}());
