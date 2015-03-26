//Data
var famMembers = [
{title: "Ronald Jobst", description: "My Stepfather, who loves to work hard for his family.", image: "fampics/IMG_0342"},
{title: "Ashlie Jobst", description: "My sister, who appreciates anytime with her family.", image: "fampics/IMG_0339"},
{title: "Julia Perilla", description: "My niece, who constantly loves to eat and play.", image: "fampics/IMG_0318"},
{title: "Frank Borg", description : "My father, who makes sure everybody in his family is taken care of.", image: "fampics/IMG_0018"},

];

var mainWindow = function(){
	var famMemWindow = Ti.UI.createWindow({
		title: "Family Member",
		backgroundColor: "#f5f5f5"
});


var titleView = Ti.UI.createView({
	height: 65,
	backgroundcolor: "#fff",
	top: 0
});

var border = Ti.UI.createView({
	backgroundColor: "#dbdbdb",
	height: 1,
	top: titleView.height + titleView.top
});	

var members = Ti.UI.createTableView({
	top: border.top + border.height
});

if(Ti.Platform.name === "iPhone OS"){
	famMembers.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
}

var famMembersSection = Ti.UI.createTableViewSection({
	headerTitle: "Important Members",
	footerTitle: "Makes A Great Family"
});	

var getDetail = function(dataSource){
	var detailWindow = Ti.UI.createWindow({
		backgroundColor: "#f5f5f5",
	});

	var detailTitleView = Ti.UI.createView({
		height: 65,
		backgroundcolor: "#fff",
		top: 0
	});
	
	var detailBorder = Ti.UI.createView({
		backgroundColor: "#dbdbdb",
		height: 1,
		top: detailTitleView.height + detailTitleView.top
	});
	
	var detailTitleLabel = Ti.UI.createLabel({
		text: dataSource.title,
		font: {fonteSize: 20, fontFamily: "Arial", fontWeigth: "bold"},
		top: 30,
		width: "100%",
		textAlign: "center"
	});
	
	var detailImageView = Ti.UI.createImageView({
		image: dataSource.fampics,
		top: 35,
		width: "100%",
		imageAlign: "center"
	});
	
	var detailText = Ti.UI.createLabel({
		text: dataSource.desc,
		font: {fonteSize: 14, fontFamily: "Arial"},
		top: detailBorder.height + detailBorder.top + 40,
		left: 10,
		right: 10
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
		detailWindow.close({transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
	};
	
	closeButton.addEventListener("click", closeWindow);
	
	detailTitleView.add(detailTitleLabel);
	detailWindow.add(detailTitleView, detailBorder, detailText, detailImageView, closeButton);
	
	detailWindow.open({transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
};	

famMemWindow.add(members);




for(var i=0, j=famMembers.length; i<j; i++){
	var theRow = Ti.UI.createTableViewRow({
		title: famMembers[i].title,
		desc: famMembers[i].description,
		image: famMembers[i].image,
		hasChild: true
	});
	
	if(Ti.Platform.name === "iPhone OS"){
		theRow.hasChild = false;
		theRow.hasDetail = true;	
}
	
	famMembersSection.add(theRow);
}

var familySection = [famMembersSection];

members.setData(familySection);
members.addEventListener("click", function(event){
	getDetail(event.source);
	console.log(event);
});

	
	famMemWindow.add(titleView, border, famMembers);
	navWin.openWindow(famMemWindow);
	
};

famMemButton.addEventListener("click", mainWindow);


	
	
	
