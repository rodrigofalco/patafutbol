'use strict';
var mongoose = require('mongoose');
var Player = mongoose.model('Player', { name: String, nick: String });
/**
 * Module dependencies.
 */
exports.index = function(req, res) {
	res.render('index', {
		user: req.user || null,
		request: req
	});
};

exports.players = function(req, res) {
	
	Player.find(function (err, players) {
	  if (err) { 
	  	console.error(err);
	  	res.send({ errors: err });
	  }
	  console.log(players);
	  res.send({ players: players });
	});
};
