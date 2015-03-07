module.exports = function() {
  "use strict";
  var isOldIE = !(typeof (window.innerWidth) == 'number'); // IE 6-8

  if (isOldIE) {
    return document.documentElement.clientWidth;
  }

  // Everything else
  return window.innerWidth;
};
