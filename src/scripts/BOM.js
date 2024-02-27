//time Functions

setTimeout(function(parameters){},delay,parameters); //executes the function once after x milliseconds
setInterval(function(parameters){},delay,parameters); //repeats the function every x milliseconds
clearTimeout(variable = setTimeout() || setInterval()); //clears the delay

//window Object
window.open(url, windowName, [windowFeatures]); //opens a new browser window
window.close(); //closes the current window
window.moveTo(x,y); //moves the window to the specified position
window.moveBy(x,y); //moves the window relative to its current position
window.resizeTo(width,height); //resizes the window to the specified width and height
window.resizeBy(width,height); //resizes the window by the specified pixels
window.prompt(text, defaultText); //returns the text entered by the user, or null
let opcion = window.confirm(text); //returns true if the user clicks "OK", and false otherwise
opcion ? window.alert('Aceptado') : window.alert('Cancelado'); //ternary operator
//window properties
window.innerHeight; //returns the inner height of a window's content area
window.innerWidth; //returns the inner width of a window's content area
window.outerHeight; //returns the outer height of the browser window
window.outerWidth; //returns the outer width of the browser window, including all GUI elements
window.location; //returns the Location object
window.screen.height; //returns the height of the screen
window.screen.width; //returns the width of the screen
//Location Object
location.assign(url); //loads a new document
location.href = url; //same as assign()
location.replace(url); //replace the current document with a new one
window.document.location.port; //returns the port number of the server
location.search; //returns the querystring part of a URL

//Navigator Object
window.navigator.userAgent; //returns the user-agent header sent by the browser to the server
navigator.cookieEnabled; //returns true if cookies are enabled, otherwise false
navigator.geolocation; //returns a Geolocation object that can be used to locate the user's position
navigator.language; //returns the language of the browser