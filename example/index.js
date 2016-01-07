'use strict';
const browserBattery = require('../');

browserBattery((err, battery) => {
	if (err) {
		console.error(err);
		return;
	}

	document.querySelector('div').textContent = `You have ${battery.level * 100}% battery left`;
});
