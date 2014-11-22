'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication', 'Futbol',
	function($scope, Authentication, Futbol) {
		// This provides Authentication context.
		$scope.authentication = Authentication;

		// Find a list of Players
		$scope.init = function() {
			$scope.players = Futbol.findAll();
		};
	}
]);
