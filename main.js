// Change Nav Dark

tabris.ui.set({
	background: 'rgba(248, 223, 100, 1)',
	textColor: 'rgba(21, 21, 21, 1)'
});

// Create Page

var page = tabris.create('Page', {
	topLevel: true,
	background: 'rgba(248, 223, 100, 1)',
	style: ["FULLSCREEN"]
});

// Create Elements

var background = tabris.create('ImageView', {
	image: getBGImage(),
	layoutData: {top: 0, left: 0},
	background: 'rgba(0, 0, 0, 0)',
	opacity: 0.0
}).appendTo(page);

var bottomPanel = tabris.create("Composite", {
	layoutData: {left: 0, bottom: 0, right: 0, height: 220},
	background: 'rgba(21, 21, 21, 1)'
}).appendTo(page);

var logo = tabris.create('ImageView', {
	image: getLogo(),
	layoutData: {top: 30, centerX: 0},
}).appendTo(bottomPanel);

var promoText = tabris.create("TextView", {
	layoutData: {left: 0, right: 0, top: 75},
	text: 'A fun way to message your friends\nwith videos, photos and music.',
	textColor: 'rgba(255, 255, 255, 0.75)',
	font: '18px',
	alignment: 'center'
}).appendTo(bottomPanel);

var getStarted = tabris.create("Button", {
	layoutData: {centerX: 0, bottom: 30, width: 200, height: 45},
	text: 'Get Started',
	textColor: 'rgba(255, 255, 255, 1)',
	font: 'bold 16px',
	alignment: 'center',
	background: 'rgba(0, 160, 230, 1)'
}).appendTo(bottomPanel);

// Animate Elements

background.animate(
	{
		opacity: 1.0,
	},
	{
		delay: 800,
		duration: 400,
		easing: 'ease-out'
	}
);

function getBGImage() {
	return {src: 'images/walkthrough-750.png', scale: 2}
}

function getLogo() {
	return {src: 'images/logo.png', scale: 7}
}

page.open();
