exports.createPage = function() {
	
	// Create Page
	
	var page = tabris.create('Page', {
		background: 'rgba(248, 223, 100, 1)',
		textColor: 'rgba(21, 21, 21, 1)',
		title: '',
		style: ["FULLSCREEN"]
	});
	
	// Create Elements
	
	page.background = tabris.create('ImageView', {
		image: {src: 'images/walkthrough.png', width: screen.width, height: screen.height},
		layoutData: {top: -20, left: 0},
		background: 'rgba(0, 0, 0, 0)'
	}).appendTo(page);
	
	page.bottomPanel = tabris.create("Composite", {
		layoutData: {left: 0, bottom: 0, right: 0, height: 220},
		background: 'rgba(21, 21, 21, 1)'
	}).appendTo(page);
	
	page.bottomPanel.logo = tabris.create('ImageView', {
		image: {src: 'images/logo_small.png', width: screen.width, height: Math.round(screen.width / 15)},
		layoutData: {top: 30, left: 0},
	}).appendTo(page.bottomPanel);
	
	page.bottomPanel.promoText = tabris.create("TextView", {
		layoutData: {left: 0, right: 0, top: 75},
		text: 'A fun way to message your friends\nwith videos, photos and music.',
		textColor: 'rgba(255, 255, 255, 0.75)',
		font: '18px',
		alignment: 'center'
	}).appendTo(page.bottomPanel);
	
	page.bottomPanel.getStarted = tabris.create("Composite", {
		layoutData: {centerX: 0, bottom: 30, width: 200, height: 45}
	}).appendTo(page.bottomPanel);
	
	page.bottomPanel.getStarted.bg = tabris.create('ImageView', {
		image: {src: 'images/btn_blue.png', width: 200, height: 45},
		layoutData: {top: 0, left: 0},
	}).appendTo(page.bottomPanel.getStarted);
	
	page.bottomPanel.getStarted.button = tabris.create("Button", {
		layoutData: {top: 0, left: 0, width: 200, height: 45},
		text: 'Get Started',
		textColor: 'rgba(255, 255, 255, 1)',
		background: 'rgba(0, 0, 0, 0)',
		font: 'bold 16px',
		alignment: 'center'
	}).on('tap', function() {
		require('./createUserNumber').createPage().open();
	}).appendTo(page.bottomPanel.getStarted);
	
	// Export Page Object
	
	return page;
};