var express = require('express');
var mongoose = require('mongoose');

var app = express();



mongoose.connect(process.env.MONGO, function(err){
	if(err){
		console.log('Mongo connection error!');
	}else{
		console.log('Mongo connected!');
	}
});

app.get('/', function (req, res) {
  res.send('Hello World vol.4!');
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
});
