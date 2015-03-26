var mainWin = Ti.UI.createWindow({
	title: "Dan's Family",
	fontFamily: "Arial",
	fontSize: 50,
	top: 0,
	backgroundColor: "Black"
});

var navWin = Ti.UI.iOS.createNavigationWindow({
	window: mainWin
});

var galButton = Ti.UI.createView({
	backgroundColor: "Gray",
	height: 75,
	width: 300,
	borderRadius: 6,
	top: 65
});

var galText = Ti.UI.createLabel({
	text: "Family Gallery",
	color: "Black",
	font: {fontSize: 25, fontFamily: "Arial"},
	textAlign: "center"
});

var famMemButton = Ti.UI.createView({
	backgroundColor: "Gray",
	height: 75,
	width: 300,
	borderRadius: 6,
	top: 175
});

var famMemText = Ti.UI.createLabel({
	text: "Family Members",
	color: "Black",
	font: {fontSize: 25, fontFamily: "Arial"},
	textAlign: "center"
});

var myFavButton = Ti.UI.createView({
	backgroundColor: "Gray",
	height: 75,
	width: 300,
	borderRadius: 6,
	top: 285
});

var myFavText = Ti.UI.createLabel({
	text: "Favorite Family Time",
	color: "Black",
	font: {fontSize: 25, fontFamily: "Arial"},
	textAlign: "center"
	
});

var bottomText = Ti.UI.createLabel({
	text: "Daniel Borg VFW 1503",
	color: "White",
	font: {fontSize: 10, fontFamily: "Arial"},
	bottom: 20
});

var loadFile = require("galleryView");
var laodFile = require("famMem");

mainWin.add(galButton, famMemButton, myFavButton, bottomText);
galButton.add(galText);
famMemButton.add(famMemText);
myFavButton.add(myFavText);
navWin.open();






