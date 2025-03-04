// legacy devices require ES5-compatible syntax
// beware or using "modern" javascript if you want your script to be generally applicable
var brightness = sos.config.brightness;

console.log('Will set brightness to ' + brightness);

sos.management.screen.setBrightness('03:00:00', brightness, '23:00:00', brightness)
	.then(function(result) {
		console.log('ok', result);
		// pass script response back to cloud
		postResult("Success, brightness set to " + brightness);
	})
	.catch(function(e) {
		console.error('failed', e);
		// pass script response back to cloud
		postResult("Failed to set brightness " + brightness);
	});
