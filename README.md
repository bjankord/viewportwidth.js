getViewport.js
=======================

A solution to report accurate cross-browser viewport dimensions

## Why do I need this?
Webkit handles media query widths/heights differntly than most other browsers.

In both Chrome and Safari, `window.innerWidth` and `document.documentElement.clientWidth` report different values if there is a scroll bar present on the page.

At a viewport width of 750px: 

Chrome and Safari report `window.innerWidth = 767` and `document.documentElement.clientWidth = 750`

Firefox, Opera, IE report `window.innerWidth = 750` and `document.documentElement.clientWidth = 733` 

That means you cannot not solely use `window.innerWidth` or `document.documentElement.clientWidth` or even `$(window).width();` and expect it to be in sync with the value your media queries are responding to.
If you want to sync javascript interactions with your media query breakpoints, this is one possible solution.

This is not an issue if there is no scroll bar on the page, so it is easy for devs to miss this issue. 

You can [read more about the issue here](http://www.456bereastreet.com/archive/201101/media_queries_viewport_width_scrollbars_and_webkit_browsers/ )

## Sample usage
To get the viewport width
    
    var vpw = getViewport().width;
    
To get the viewport height
    
    var vpw = getViewport().height;

## Support
getViewport.js has been tested and works in/on:

* Chrome
* Safari
* Firefox
* IE9+
* iPad - Safari
* iPad - Chrome
* Android 4.0 - Stock Browser 
* Android - Chrome
* Android - Firefox

### Need to test
* IE8 and lower
* Windows Phones
* Opera Mobile
* Blackberry Mobiles


## Notes
Based on a [gist](https://gist.github.com/2399828) I wrote back in April 2012 which was inspired by the Scott Jehl's [expriemnt](https://gist.github.com/2051999) with getting the visible viewport dimensions
Finally decided to move this to an actual repo.

[jsperf test 1](http://jsperf.com/viewport-dimensions)
[jsperf test 2](http://jsperf.com/viewport-width-check)
