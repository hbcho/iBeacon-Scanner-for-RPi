var net = require('net');
//var player = require('play-sound');

var lastTimePlayed = 0;
var beacons = {};
var playSoundTimeout = null;

var pUuid = '53657272-616E-6574-6761-000000000000';

var server = net.createServer(function(stream) {
	stream.on('data', function(c) {
		console.log('data:', c.toString());
		var beacs = c.toString().split(',')
		if(beacs === undefined) {
			console.log('Can not split input data');
			return;
		}

		// exit if not proper iBeacon
		//if(beacs[0].indexOf(pUuid) < 0) return;

		beacs[5] = beacs.replace(/ /g,'-');
		beacs[6] = getDistance(beacs[4],beacs[3]);
		beacons[beacs[0] + "_" +  beacs[5]] = beacs;
		/*if(playSoundTimeout === null) {
			playSound();
		}*/
	});
	stream.on('end', function() {
		startListening();
		//server.close();
	});
});

function startListening() {
	server.listen('/tmp/ibeacon.sock');
}


function playSound() {
	playSoundTimeout = null;
	var play = false;
	for(var key in beacons) {
		console.log(beacons[key]);
		if(beacons[key][6] < 1) {
			play = true;
		}
	}
	if(play) {
		player.play('test.mp3');
		playSoundTimeout = setTimeout(playSound,30000);
	}
}

function getDistance(rssi,txpower) {
	if(rssi === 0) {
		return -1.0;
	}

	if(txpower === 0) {
		return -1.0;
	}

	var ratio = rssi / txpower;
	if(ratio < 1) {
		return Math.pow(ratio,10);
	} else {
		return 0.89976*Math.pow(ratio,7.7095) + 0.111;
	}
}

startListening();
