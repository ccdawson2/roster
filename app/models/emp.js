var mongoose = require('mongoose');

var empSchema = mongoose.Schema({
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

var emp = mongoose.model('emp', empSchema);