var mongoose = require('mongoose');

var roleSchema = mongoose.Schema({
    code: String,
    description: String
});

var role = mongoose.model('role', roleSchema);