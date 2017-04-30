var mongoose = require('mongoose'),

emp = mongoose.model('emp');
	
module.exports = function(app) {
    
    app.get('/api/emps', function(req, res, next) {
		
        emp.find().exec(function(err, data) {
            if(err) {
                return next(err);
            }
            res.json(data);
        });
    });

	app.get('/api/emp/:id', function(req, res) {
        emp.findById(req.params.id, function(err, data){
            res.json(data);
        });
    });
	
	app.post('/api/emp', function(req, res, next) {
		
        console.log('DEBUG: put /api/emp ');

        var Emp = new emp({
            fname: req.body.fname,
            lname: req.body.lname
        });
        Emp.save(function(err, data) {
            if(err) {
                return next(err);
            }
            res.status(201).json(data);
        });
    });
	
    app.delete('/api/emp/:id', function(req, res) {
        emp.findByIdAndRemove(req.params.id, function(err, data) {
            res.json(data);
        });
    });
	
    app.put('/api/emp/:id', function(req, res, next) {
        emp.findById(req.params.id, function(err, data) {
            data.fname = req.body.fname;
            data.lname = req.body.lname;
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