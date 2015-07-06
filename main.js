// Device Styling

tabris.ui.set({
	background: 'rgba(21, 21, 21, 1)',
	textColor: 'rgba(255, 255, 255, 1)'
});

if (typeof StatusBar !== 'undefined') {
	StatusBar.styleLightContent();
}

// Open Walkthrough Page

require('./walkthrough').createPage().open();

navigator.notification.alert(
    typeof StatusBar,  // message
    function() {
    
    },         // callback
    'Game Over',            // title
    'Done'                  // buttonName
);

if (typeof StatusBar !== 'undefined') {
	StatusBar.hide();
}

if (typeof navigator.splashscreen !== 'undefined') {
	setTimeout(function() {
		navigator.splashscreen.hide();
	}, 4000);	
}
