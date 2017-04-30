var mongoose = require('mongoose');

var clientSchema = mongoose.Schema({
    fname: String,
    lname: String,
    updated: {
        type: Date
    },
    created: {
        type: Date,
        default: Date.now
    }
});

var client = mongoose.model('client', clientSchema);