var express = require('express');
var app = express();

function greetingMsg(name,showtime) {
	var today = new Date();
	var msg = (name != null) ? 'Hello ' + name + '! ' : 'Hello';
	if (showtime) {
		msg += " It is now " + today.toTimeString();
	}
	return(msg);
}

app.get('/', function (req, res) {

res.send("Hellow");
});

app.get('/greetings', function (req, res) {
  res.download('/Users/lokyinleon/Desktop/Node.js/ServerAPI2.js');
  res.send(greetingMsg(req.query.name,false));
  
  console.log("****");
});

app.get('/greetings/sayHello', function (req, res) {
  res.send(greetingMsg(req.query.name,false));
});

app.get('/greetings/sayHelloWithTime', function (req, res) {
  res.send(greetingMsg(req.query.name,true));
});

var server = app.listen(process.env.PORT || 8099, function () {
  var port = server.address().port;
  console.log('Server listening at port %s', port);
});
