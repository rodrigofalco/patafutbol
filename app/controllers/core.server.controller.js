'use strict';

var mongoose = require('mongoose'),
    errorHandler = require('./errors.server.controller'),
    //Futbol = require('Futbol'),
    Player = mongoose.model('Player');
//var Players = require('players');

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
	Player.find().sort('-created').populate('user', 'displayName').exec(function(err, players) {
		if (err) {
			return res.status(400).send({
				message: errorHandler.getErrorMessage(err)
			});
		} else {
			//debug.log(players);
			res.jsonp(players);
		}
	});
};
