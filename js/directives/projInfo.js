app.directive('projInfo', function() {
	return {
		restrict: 'E',
		scope: {
			project: '='
		},
		templateUrl: 'Website/js/directives/projInfo.html'
	};
});
