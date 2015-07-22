exec('sudo ibeacon_can -b',function(error,stdout,stderr) {
	console.log('stdout:' + stdout);
	console.log('stderr:' + stderr);
	if(error !== null) {
		console.log('exec error: ' + error);
	}
});
