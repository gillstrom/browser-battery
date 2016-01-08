'use strict';
const browserBattery = require('../');

browserBattery().then(battery => {
	document.querySelector('div').textContent = `You have ${battery.level * 100}% battery left`;
}).catch(err => {
	console.error(err);
});
