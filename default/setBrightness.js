const brightness = sos.config.brightness;

console.log('Will set brightness to ' + brightness);

sos.management.screen.setBrightness('03:00:00', brightness, '23:00:00', brightness)
	.then((result) => console.log('ok', result))
	.catch((e) => console.error('failed', e));
