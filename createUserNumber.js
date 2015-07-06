exports.createPage = function() {
	
	// Style Device
	
	tabris.ui.set({
		background: 'rgba(21, 21, 21, 1)',
		textColor: 'rgba(255, 255, 255, 1)'
	});
	
	// Create Page
	
	var page = tabris.create('Page', {
		topLevel: true,
		background: 'rgba(21, 21, 21, 1)',
	});
	
	page.logo = tabris.create('ImageView', {
		image: {src: 'images/logo_large.png', width: screen.width, height: Math.round(screen.width / 7.5)},
		layoutData: {top: 64, left: 0},
	}).appendTo(page);
	
	// Export Page Object
	
	return page;
};