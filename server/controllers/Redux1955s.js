var mongoose = require('mongoose');
var Redux = mongoose.model('Redux');
module.exports = (function() 
{
	return{
		show:function(req,res)
		{
			Redux.find({}, function(err, results){
				if(err)
				{}
				else
				{
					res.json(results);
				}
			});
		},
		create:function(req, res)
		{
			var redux = new Redux({name: req.body.name});
			redux.save(function(err)
			{
				if(err){}
				else
				{
					res.redirect('/redux');
				}

			});

		},
		destroy: function(req,res)
		{
			Redux.remove({_id: req.body._id}, function (err){
			res.redirect('/redux');

		});
}

	}
})();