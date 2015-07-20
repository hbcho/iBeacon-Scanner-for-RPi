var express = require('express');
var app = express();

app.get('/',function(req,res) {
	res.sendfile('index.html');
});

app.get('/beacons.json',function(req,res) {
	res.setHeader('Content-Type','application/json');
	res.sendfile('beacons.json');
});

var port = process.env.PORT || 5000;
app.listen(port,function() {
	console.log('Listening on ' + port);
});
