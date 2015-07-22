var fs = require('fs');

var s = fs.createReadStream('newbeacon');

s.on('data', function(b) {
	console.log(v);
});
