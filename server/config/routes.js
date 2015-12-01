var pgs = require('pg');
var connectionString = process.env.DATABASE_URL || 'deepagk://localhost/redux';

var client = new pgs.Client(connectionString);
client.connect();


module.exports = function(app) {

app.get('/redux', function(req,res){
	var results=[];
	var query =client.query('SELECT * FROM newredux');
	query.on('row', function(row) {
	    results.push(row);
	});
	query.on('end', function() {
  
            return res.json(results);
        });
});


app.post('/create', function(req, res){
	client.query("INSERT INTO newredux(name) VALUES('"+req.body.name+"')");
	res.redirect('/redux');
	
});


app.post('/destroy', function(req,res){
	client.query("DELETE from newredux where id="+req.body.id);
	
	res.redirect('/redux');
});

}