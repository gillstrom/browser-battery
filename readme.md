# browser-battery

> Get battery information in a browser

*Currently working in Chrome, Firefox and Opera.*


## Install

```
$ npm install --save browser-battery
```


## Usage

```js
var browserBattery = require('browser-battery');

browserBattery(function (err, battery) {
	console.log(battery);
	/*
	{
		charging: false
		chargingTime: Infinity
		dischargingTime: 11160
		level: 0.6
		onchargingchange: null
		onchargingtimechange: null
		ondischargingtimechange: null
		onlevelchange: null
	}
	 */
});
```


## License

MIT © [Andreas Gillström](http://github.com/gillstrom)
