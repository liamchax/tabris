var pages = {
	walkthrough: require('./walkthrough'),
	createUserNumber: require('./createUserNumber')
}


pages.walkthrough.createPage().open();

setTimeout(function() {
	//navigator.splashscreen.hide();
}, 2000);
