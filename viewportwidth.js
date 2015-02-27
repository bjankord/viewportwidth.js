/*! viewportwidth.js 0.1.2 | Author: Brett Jankord, 2012 | License: MIT */
/* https://github.com/bjankord/viewportwidth.js */
module.exports = function() {
  "use strict";
  var isWebKit = 'WebkitAppearance' in document.documentElement.style;
  var isOldIE = !(typeof (window.innerWidth) == 'number'); // IE 6-8

  if (isWebKit || isOldIE) {
    return document.documentElement.clientWidth;
  }

  // Everything else
  return window.innerWidth;
};
