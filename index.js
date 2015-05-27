'use strict';
module.exports = function (cb) {
	if (!navigator || (!navigator.battery && !navigator.getBattery)) {
		cb(new Error('Browser not supported'));
		return;
	}

	if (navigator.battery) {
		cb(null, navigator.battery);
		return;
	}

	navigator.getBattery().then(function (battery) {
		cb(null, battery);
	});
};
