var titleText = Ti.UI.createLabel({
	text: "Favortie Family Time",
	color: "Black",
	top: 35
});

var border = Ti.UI.createView({
	backgroundColor: "#dbdbdb",
	height: 1,
	top: 60
});
var picText = Ti.UI.createLabel({
	text: "Flip to see what is my favorite family time",
	font: {fontSize: 35, fontFamily: "Arial"},
	textAlign: "center",
	top: 125
});

var mainWindow = function(){ 
	var favWin = Ti.UI.createWindow({
		backgroundColor: "White"
	});
	
	var picSwitch = Ti.UI.createSwitch({
		value: false,
		bottom: 130
	});	
	
	var favWinText = Ti.UI.createLabel({
		text: "Last Year's Thanksgiving",
		color: "Black",
		bottom: 100
	});
	
	var showPic = Ti.UI.createImageView({
		image: "fampics/IMG_0020.JPG",
		top: 70
	});
	
	var closeButton = Ti.UI.createLabel({
		text: "Close Window",
		backgroundColor: "#333",
		color: "#fff",
		height: 50,
		font: {fonteSize: 12, fontFamily: "Arial"},
		width: "100%",
		bottom: 0,
		textAlign: "center"

	});
	
	var closeWindow = function(){
		//detailWindow.close();
		favWin.close({transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
	};
	
	closeButton.addEventListener("click", closeWindow);
	
	favWin.open();
	
	var showFav = function(){
		if(picSwitch.value == false){
			favWin.add(picText);
			favWin.remove(favWinText);
			favWin.remove(showPic);
		}
		else if (picSwitch.value == true){
			favWin.add(showPic);
			favWin.add(favWinText);
			favWin.remove(picText);
			
		}		
	};
	
	picSwitch.addEventListener("change", function(e){
	showFav('Switch value: ' + picSwitch.value);
		
	});
	favWin.add(titleText, border);
	favWin.add(picSwitch, picText, favWinText, closeButton);
	navWin.openWindow(favWin);
};

myFavButton.addEventListener("click", mainWindow);
	
	
