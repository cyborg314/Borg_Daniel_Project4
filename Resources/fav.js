var showPic = Ti.UI.createImageView({
	image: "fampics/IMG_0020",
	top: 70
});

var picText = Ti.UI.createLabel({
	text: "Flip to see what is my favorite family time",
	font: {fontSize: 35, fontFamily: "Arial"},
	textAlign: "center",
	top: 125
});

var picSwitch = Ti.UI.createSwitch({
	value: false,
	bottom: 145
});

var mainWindow4 = function(){
	var favWin = Ti.UI.createWindow({
		title: "My Favorite Family Time",
		backgroundColor: "White"
	});

	var showFav = function(){
		if(picSwitch.value == false){
			favWin.add(picText);
			favWin.remove(showPic);
		}
		else if (picSwitch.value == true){
			favWin.add(showPic);
			favWin.remove(picText);
		}		
	};
	
	picSwitch.addEventListener("click", showFav);
	favWin.add(picSwitch, picText);
	navWin.openWindow(favWin);
};

myFavButton.addEventListener("click", mainWindow4);
	
	
