var express = require('express');
var app = express();


app.get('/',function(req,res) {
	res.sendfile('index.html');
});

app.get('/v1/beacons',function(req,res) {
	fs.readFile('beacons.json',function(err, data) {
		res.setHeader('Content-Type','application/json');
		if(err || data.length === 0) {
			 res.send({});
		} else {
			res.send(data);
		}
	});
});

var port = process.env.PORT || 5000;
app.listen(port,function() {
	console.log('Listening on ' + port);
});
