var mongoose = require('mongoose'),

client = mongoose.model('client');
	
module.exports = function(app) {
    
    app.get('/api/clients', function(req, res, next) {
		
        client.find().exec(function(err, data) {
            if(err) {
                return next(err);
            }
            res.json(data);
        });
    });

	app.get('/api/client/:id', function(req, res) {
        client.findById(req.params.id, function(err, data){
            res.json(data);
        });
    });
	
	app.post('/api/client', function(req, res, next) {
		
        console.log('DEBUG: put /api/client ');

        var Client = new client({
            fname: req.body.fname,
            lname: req.body.lname
        });
        Client.save(function(err, data) {
            if(err) {
                return next(err);
            }
            res.status(201).json(data);
        });
    });
	
    app.delete('/api/client/:id', function(req, res) {
        client.findByIdAndRemove(req.params.id, function(err, data) {
            res.json(data);
        });
    });
	
    app.put('/api/client/:id', function(req, res, next) {
        client.findById(req.params.id, function(err, data) {
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