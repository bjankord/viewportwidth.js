/*! viewportwidth.js 0.1.1 | Author: Brett Jankord, 2012 | License: MIT */
/* https://github.com/bjankord/viewportwidth.js */
var getViewportWidth = function(){

  var vpw, w = window, webkit = (!(window.webkitConvertPointFromNodeToPage == null));

  // Webkit and IE 6-8
   if (webkit || !(typeof (window.innerWidth) == 'number')) {
    vpw = document.documentElement.clientWidth;
  } 
  // Everything else
  else {
    vpw =  w.innerWidth;
  }

  return vpw;

};