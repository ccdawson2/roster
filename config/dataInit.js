/***************

var mongoose = require('mongoose');

var roleSchema = mongoose.Schema({
    code: String,
    description: String
});


var role = mongoose.model('role', roleSchema);

console.log('DEBUG: createDefaultRoles()');

role.find({}).exec(function(err, collection) {

   if(collection.length === 0) {
       Role.create({code: 'RN1 3', description: 'RN1 - Grade 3'});
       Role.create({code: 'RN1 4', description: 'RN1 - Grade 4'});
       Role.create({code: 'CNC 4', description: 'Clinical Nurse Coordinator - Grade 4'});
      };

});

*******************/