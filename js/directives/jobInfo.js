app.directive('jobInfo', function() {
	return {
		restrict: 'E',
		scope: {
			job: '='
		},
		templateUrl: 'Website/js/directives/jobInfo.html'
	};
});
