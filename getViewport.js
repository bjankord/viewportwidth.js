/*! getViewport.js | Author: Brett Jankord, 2012 | License: MIT */
/* https://github.com/bjankord/getViewport.js */
﻿
var getViewport = function(){

    var vpw, w = window, webkit = (!(window.webkitConvertPointFromNodeToPage == null));
    // Webkit and IE 6-8
    if ( webkit || w.innerWidth === undefined) {
      vpw = document.documentElement.clientWidth;
      vph = document.documentElement.clientHeight;
    }
    // Everything else
    else{
      vpw =  w.innerWidth;
      vph =  w.innerHeight;
    }

    var dims = { width: vpw, height: vph };
    return dims;
};
