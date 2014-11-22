'use strict';



//Menu service used for managing  menus
angular.module('core').service('Futbol', [ 'Players',

	function(Players) {
		this.findAll = function() {
			return Players.query();
		};
	}
]);
