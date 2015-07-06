tabris.ui.set({
	background: 'rgba(21, 21, 21, 1)',
	textColor: 'rgba(255, 255, 255, 1)'
});

var pages = {
	walkthrough: require('./walkthrough').createPage(),
	createUserNumber: require('./createUserNumber').createPage()
}

// Open Walkthrough Page

pages.walkthrough.open();


if (navigator.splashscreen) {
	setTimeout(function() {
		navigator.splashscreen.hide();
	}, 2000);	
}
