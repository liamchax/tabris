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
	
	// Export Page Object
	
	return page;
};