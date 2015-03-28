var gallery = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "fampics");
var galleryList = gallery.getDirectoryListing();

var famImages = Ti.UI.createImageView({
	image: "fampics/" + galleryList[0],
	bottom: 150                     
});

var famView = function(){
	var lastFam = famView;
	var randomFam = Math.floor(Math.random()*galleryList.length);
	while(lastFam === randomFam){
		var randomFam = Math.floor(Math.random()*galleryList.length);
	};
	famImages.image = "fampics/" + galleryList[randomFam];
};

var nextPicButton = Ti.UI.createView({
	backgroundColor: "Gray",
	height: 75,
	bottom: 0,
	width: "100%"
});

var nextPicText = Ti.UI.createLabel({
	text: "Random Picture",
	font:{fontSize: 20, fontFamily: "Arial"},
	textAlign: "center"
});

var mainWindow = function(){
	var galleryWindow = Ti.UI.createWindow({
		title: "Family Gallery Pictures",
		backgroundColor: "Black"
	});
	nextPicButton.add(nextPicText);
	galleryWindow.add(nextPicButton, famImages);
	navWin.openWindow(galleryWindow);
	
};

nextPicButton.add(nextPicText);
nextPicButton.addEventListener("click", famView);
galButton.addEventListener("click", mainWindow);


