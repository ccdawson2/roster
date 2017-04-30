var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    fname: String,
    lname: String,
	role:  String,
    updated: {
        type: Date
    },
    created: {
        type: Date,
        default: Date.now
    }
});

var user = mongoose.model('user', userSchema);