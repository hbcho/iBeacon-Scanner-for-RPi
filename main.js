var net = require('net');

var server = net.createServer(function(stream) {
	stream.on('data', function(c) {
		console.log('data:', c.toString());
	});
	stream.on('end', function() {
		startListening();
		//server.close();
	});
});

function startListening() {
	server.listen('/tmp/ibeacon.sock');
}

startListening();
