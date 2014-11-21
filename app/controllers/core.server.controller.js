'use strict';
var mongoose = require('mongoose');
var Player = mongoose.model('Player', { name: String, nick: String });

/**
 * Index html.
 * This is the main container for the angular app.
 * There should be no passing database objects to the view,
 * as this are latter interchanged between angular and express.
 */
exports.index = function(req, res) {
	res.render('index', {
		user: req.user || null,
		request: req
	});
};

/**
* Temporal controller that returns players json.
*/
exports.players = function(req, res) {
	Player.find(function (err, players) {
	  if (err) { 
	  	console.error(err);
	  	res.send({ errors: err });
	  }
	  //console.log(players);
	  res.send({ players: players });
	});
};
