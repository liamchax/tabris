exports.createPage = function() {
	
	// Create Page
	
	var page = tabris.create('Page', {
		background: 'rgba(21, 21, 21, 1)',
		textColor: 'rgba(255, 255, 255, 1)'
	});
	
	page.logo = tabris.create('ImageView', {
		image: {src: 'images/logo_large.png', width: screen.width, height: Math.round(screen.width / 7.5)},
		layoutData: {top: 0, left: 0},
	}).appendTo(page);
	
	page.infoText = tabris.create("TextView", {
		layoutData: {left: 0, right: 0, centerY: -134},
		text: 'To create an account or sign in,\nuse your phone number.',
		textColor: 'rgba(255, 255, 255, 0.75)',
		font: '18px',
		alignment: 'center'
	}).appendTo(page);
	
	page.legalText = tabris.create("TextView", {
		layoutData: {left: 0, right: 0, bottom: 64},
		text: 'By tapping Next, you agree to the\nterms and conditions on ChaxApp.com',
		textColor: 'rgba(255, 255, 255, 0.3)',
		font: '14px',
		alignment: 'center'
	}).appendTo(page);
	
	page.divOne = tabris.create('ImageView', {
		image: {src: 'images/line.png'},
		scaleMode: 'stretch',
		layoutData: {centerY: -39, left: 48, right: 48, height: 1},
	}).appendTo(page);
	
	page.divTwo = tabris.create('ImageView', {
		image: {src: 'images/line.png'},
		scaleMode: 'stretch',
		layoutData: {centerY: 12, left: 48, right: 48, height: 1},
	}).appendTo(page);
	
	page.codeText = tabris.create("TextView", {
		layoutData: {centerY: -13, centerX: -108, width: 60, height: 30},
		text: '+852',
		textColor: 'rgba(255, 255, 255, 1)',
		font: '16px',
		alignment: 'right'
	}).appendTo(page);
	
	page.countryText = tabris.create("TextView", {
		layoutData: {centerY: -63, centerX: 0, height: 30},
		text: 'Hong Kong',
		textColor: 'rgba(255, 255, 255, 1)',
		font: '16px',
		alignment: 'center'
	}).appendTo(page);
	
	page.countryPicker = tabris.create('Picker', {
		layoutData: {centerY: -62, left: 48, right: 48},
		items: ['Hong Kong', 'Tahiti', 'Croatia', 'United States'],
		selection: 'Hong Kong',
		opacity: 0.02,
		background: 'rgba(21, 21, 21, 1)',
		textColor: 'rgba(21, 21, 21, 1)'
	}).on('change:selection', function(picker, item) {
		page.countryText.set({
			text: item
		});
		switch (item) {
			case 'Hong Kong':
				var codeText = '+852';
				navigator.statusBar.hide();
				break;
			case 'Tahiti':
				var codeText = '+689';
				navigator.statusBar.show();
				break;
			case 'Croatia':
				var codeText = '+385';
				navigator.statusBar.whiteTint();
				break;
			case 'United States':
				var codeText = '+1';
				navigator.statusBar.blackTint();
				break;
		}
		if (codeText) {
			page.codeText.set({
				text: codeText
			});
		}
	}).appendTo(page);
	
	page.phoneNumber = tabris.create("TextInput", {
		layoutData: {centerY: -13, centerX: 0, width: 150, height: 30},
		text: 'Phone Number',
		background: 'rgba(21, 21, 21, 0)',
		textColor: 'rgba(255, 255, 255, 1)',
		font: '16px',
		alignment: 'center',
		keyboard: 'number'
	}).on('focus', function(picker, item) {
		var phoneNumber = page.phoneNumber.get('text').trim();
		if (phoneNumber == 'Phone Number') {
			page.phoneNumber.set({
				text: ''
			});
		}
	}).on('blur', function(picker, item) {
		var phoneNumber = page.phoneNumber.get('text').trim();
		if (phoneNumber == '') {
			page.phoneNumber.set({
				text: 'Phone Number'
			});
		}
	}).appendTo(page);
	
	page.next = tabris.create("Button", {
		layoutData: {centerX: 0, centerY: 67, width: 200, height: 30},
		text: 'Next',
		textColor: 'rgba(248, 223, 100, 1)',
		background: 'rgba(0, 0, 0, 0)',
		font: 'bold 16px',
		alignment: 'center'
	}).on('tap', function() {
		//require('./createUserNumber').createPage().open();
	}).appendTo(page);
	
	// Export Page Object
	
	return page;
};