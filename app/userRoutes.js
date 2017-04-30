var mongoose = require('mongoose'),

user = mongoose.model('user');
	
module.exports = function(app) {
    
    app.get('/api/users', function(req, res, next) {
		
        user.find().exec(function(err, data) {
            if(err) {
                return next(err);
            }
            res.json(data);
        });
    });

	app.get('/api/user/:id', function(req, res) {
        user.findById(req.params.id, function(err, data){
            res.json(data);
        });
    });
	
	app.post('/api/user', function(req, res, next) {
		
        console.log('DEBUG: put /api/user ');

        var User = new user({
            fname: req.body.fname,
            lname: req.body.lname,
			role:  req.body.role
        });
        User.save(function(err, data) {
            if(err) {
                return next(err);
            }
            res.status(201).json(data);
        });
    });
	
    app.delete('/api/user/:id', function(req, res) {
        user.findByIdAndRemove(req.params.id, function(err, data) {
            res.json(data);
        });
    });
	
    app.put('/api/user/:id', function(req, res, next) {
        user.findById(req.params.id, function(err, data) {
            data.fname = req.body.fname;
            data.lname = req.body.lname;
            data.role  = req.body.role;
            data.updated = Date.now();
            data.save(function(err, data) {
                if(err) {
                    return next(err);
                }
                res.status(201).json(data);
            });
        });
    });
};