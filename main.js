var child_process = require('child_process');

child_process.exec('sudo ./ibeacon_scan -b',function(error,stdout,stderr) {
	console.log('stdout:' + stdout);
	console.log('stderr:' + stderr);
	if(error !== null) {
		console.log('exec error: ' + error);
	}
});
