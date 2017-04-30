var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/roster');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'db not connected...'));
db.once('open', function callback() {});