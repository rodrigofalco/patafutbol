'use strict';

//Setting up route
angular.module('matches').config(['$stateProvider',
	function($stateProvider) {
		// Matches state routing
		$stateProvider.
		state('listMatches', {
			url: '/matches',
			templateUrl: 'modules/matches/views/list-matches.client.view.html'
		}).
		state('createMatch', {
			url: '/matches/create',
			templateUrl: 'modules/matches/views/create-match.client.view.html'
		}).
		state('viewMatch', {
			url: '/matches/:matchId',
			templateUrl: 'modules/matches/views/view-match.client.view.html'
		}).
		state('editMatch', {
			url: '/matches/:matchId/edit',
			templateUrl: 'modules/matches/views/edit-match.client.view.html'
		});
	}
]);