var child = require('child_process'),
		fs = require('fs');

var myREPL = child.spawn('node'),
		myStream = fs.createReadStream('newbeacon');

//myREPL.stdout.pipe(process.stdout, {end: false});

myStream.on('data', function(b) {
	console.log(b);
});

process.stdin.resume();
