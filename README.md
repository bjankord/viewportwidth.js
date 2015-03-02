Viewportwidth.js
================

A solution for determining accurate cross-browser viewport widths.

[View Demo](http://www.brettjankord.com/projects/viewportwidth/demo/)

## Why do I need this?
Sometimes you want to sync JavaScript functionality with your CSS media query breakpoints.

Webkit handles media query widths/heights differntly than most other browsers.

In both Chrome and Safari, `window.innerWidth` and `document.documentElement.clientWidth` report different values if there is a scroll bar present on the page.

At a viewport width of 750px: 

Chrome and Safari report `window.innerWidth = 767` and `document.documentElement.clientWidth = 750`

Firefox, Opera, IE report `window.innerWidth = 750` and `document.documentElement.clientWidth = 733` 

That means you cannot not solely use `window.innerWidth` or `document.documentElement.clientWidth` or even `$(window).width();` and expect it to be in sync with the value your media queries are responding to.
If you want to sync javascript interactions with your media query breakpoints, this is one possible solution.

This is not an issue if there is no scroll bar on the page, so it is easy for devs to miss this issue. 

You can [read more about the issue here](http://www.456bereastreet.com/archive/201101/media_queries_viewport_width_scrollbars_and_webkit_browsers/)

## Sample usage

Install using [npm](https://www.npmjs.com/): `npm install viewportwidth --save`

```js
    var viewportwidth = require('viewportwidth');
    window.addEventListener('resize', function() { console.log(viewportwidth()); });
```

## Support
viewportwidth.js has been tested and works in:

* Chrome
* Safari
* Firefox
* Opera
* IE6+
* iPad - Safari
* iPad - Chrome
* Android 4.0 - Stock Browser 
* Android - Chrome
* Android - Firefox

### Need to test
* iOS pre 5.0
* Windows Phones
* Opera Mobile
* Blackberry Mobiles


## Notes
This project is based on a [gist](https://gist.github.com/2399828) I wrote back in April 2012 which was inspired by the Scott Jehl's [experiment](https://gist.github.com/2051999) with getting the visible viewport dimensions
Finally decided to move this to an actual repo.

Viewportwidth.js is fast, compared to other ways I've tested to check the viewport width.

[jsperf test 1](http://jsperf.com/viewport-width-check)

[jsperf test 2](http://jsperf.com/viewport-dimensions)

If you have any suggestions to improve this project are come across any bugs, please open up an issue ticket. Thanks!

