app.controller('MainController',['$scope', function($scope) {
	$scope.jobs = [
		{
			company: 'ServeWell Startup',
			duration: 'August 2016 -- Present',
			location: 'Kirkland, WA',
			position: 'Software Tester',
			info: ['Testing site and tracking bugs in Pivotal Tracker']
		},
		{
			company: 'Kuehler Undergraduate Engineering Research',
			duration: 'June 2016 -- Present',
			location: 'Santa Clara, CA',
			position: 'Research Assistant',
			info: ['Improve Cauchy- and Pellet-type bounds on the eigenvalues of matrix polynomials',
				   'Wrote a research paper on these results with applications to engineering problems',
				   'Developing algorithm which uses matrix polynomials to compute polynomial roots']
		},
		{
			company: 'Santa Clara University',
			duration: 'December 2015 -- Present',
			location: 'Santa Clara, CA',
			position: 'Tutoring Student Assistant',
			info: ['Manage the on-campus student tutoring program with the Assistant Dean',
				   'Develop new and more effective ways to improve the program']
		},
		{
			company: 'Santa Clara University',
			duration: 'December 2015 -- June 2016',
			location: 'Santa Clara, CA',
			position: 'Teaching Assistant',
			info: ['Graded and aided in the creation of exam questions for calculus courses']
		},
		{
			company: 'NYLF: Engineering and Technology',
			duration: 'July 2015',
			location: 'Fremont, CA',
			position: 'Participant',
			info: ['Led a team to create a complete game with the Unity platform',
				   'Used C# to ensure that characters followed the curvature of the ground']

		},
		{
			company: 'God Will Provide',
			duration: 'October 24, 2014 -- November 4, 2014',
			location: 'Chisua, Mozambique',
			position: 'Volunteer Dental Assistant',
			info: ['Assisted in over 400 teeth extractions']
		}
	];
	$scope.projects = [
		
	];
	$scope.activities = [
		'Association for Computing Machinery (ACM)',
		'Mathematical Association of America (MAA)',
		'Institute of Electrical and Electronics Engineers (IEEE)',
		'Maker Club'
	];
	$scope.hobbies = [
		'Cooking',
		'Board Games',
		'Gardening'
	];
}]);