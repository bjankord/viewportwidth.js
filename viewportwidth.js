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
