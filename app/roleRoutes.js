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

};