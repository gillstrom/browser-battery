'use strict';
const browserBattery = require('../');

function changeText(level) {
	document.querySelector('div').textContent = `You have ${level}% battery left`;
}

browserBattery()
	.then(battery => {
		changeText(battery.level * 100);

		battery.onlevelchange = () => changeText(battery.level * 100);
	})
	.catch(err => console.error(err));
