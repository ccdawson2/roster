var express = require('express'),
bodyParser = require('body-parser');

var app = express();
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

require('./config/dbConnect');

require('./app/models/user');
require('./app/models/emp');
require('./app/models/client');
require('./app/models/role');

require('./app/userRoutes')(app);
require('./app/empRoutes')(app);
require('./app/clientRoutes')(app);
require('./app/roleRoutes')(app);

require('./config/dataInit');

app.get('*', function(req, res) {
    res.sendfile('./public/index.html');
});


var port = "3000";
app.listen(port);
console.log("Listening to Port: " + port);