var mongoose = require('mongoose'),

role = mongoose.model('role');
	
module.exports = function(app) {
    
    app.get('/api/roles', function(req, res, next) {
		
        role.find().exec(function(err, data) {
            if(err) {
                return next(err);
            }
		res.json(data);
        });
    });

    app.post('/api/roles/createdefaults', function(req, res, next) {

        role.create({code: 'RN1 3', description: 'RN1 - Grade 3'});
        role.create({code: 'RN1 4', description: 'RN1 - Grade 4'});
        role.create({code: 'CNC 4', description: 'Clinical Nurse Coordinator - Grade 4'}, 
		   function(err, docs) {  //pass the array to the callback function
               if (err) throw err;
                    console.log(docs);
		            role.find().exec(function(err, data) {
                    if(err) {
                        return next(err);
                    }
                    res.status(201).json(data);
              });
        });
    });
};