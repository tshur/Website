app.controller('MainController',['$scope', function($scope) {
	$scope.jobs = [
		{
			company: 'Digital Innovation, NIKE, Inc.',
			duration: 'June 2017 -- Present',
			location: 'Beaverton, OR',
			position: 'Algorithm Engineer Intern',
			info: ['Created an accurate and efficient support vector machine classifier to detect specific gestures with inertial measurements (Python; C)',
			'Coordinated with intellectual property lawyers to draft a provisional patent application for my algorithm and implementation',
			'1st place in the NIKE Intern Hackathon with an AR app with innovative marker designs and artistic style transfer (C#; Unity; Vuforia)']
		},
		{
			company: 'Santa Clara University',
			duration: 'June 2016 -- Feb. 2017',
			location: 'Santa Clara, CA',
			position: 'Kuehler Undergraduate Research Fellow',
			info: ['Improved upon existing research with a novel algorithm for sharpening eigenvalue bounds of matrix polynomials (MATLAB)',
			'Authored a research paper submitted to the journal Numerical Linear Algebra with Applications (pending publication)',
			'Presented my research at the inaugural SCU Engineering Research Showcase and Mathematical Association of America conference']
		},
		{
			company: 'ServeWell (startup)',
			duration: 'Aug. 2016 -- Dec. 2016',
			location: 'Kirkland, WA',
			position: 'Software Tester',
			info: ['Tested the website, mobile application, and back-end for functionality, usability, and interface for modern audiences (PivotalTracker)']
		},
		{
			company: 'Santa Clara University',
			duration: 'Jan. 2016 -- Present',
			location: 'Santa Clara, CA',
			position: 'Student Director of Tutoring',
			info: ['Organize creative meetings and events including “Perspectives” diversity training, media marketing campaigns, and competitions',
			'Coding a program to automatically generate tutor schedules and email tutors (Python; OAuth2)']
		}
	];
	$scope.projects = [
		{
			title: 'Vibrating Wallpaper',
			company: '(class-related) Santa Clara University',
			duration: 'May 2017 -- June 2017',
			info: ['Integrated animation functionality for mathematical vibrating wallpaper into the open-source project, SymmetryWorks! (C++; Qt)']
		},
		{
			title: 'Mellow Mind',
			company: 'BroncoHack Hackathon',
			duration: 'Apr. 2017',
			info: ['Won second place with a mental-health app which combined EEG readings, IBM Watson’s tone analyzer, and data visualization (JavaScript; Python)']
		},
		{
			title: 'Bronco Tree',
			company: 'KEEN Innovative Engineering Art Challenge',
			duration: 'Feb. 2017',
			info: ['Built a virtual tree that grows by a space colonization algorithm and reacts to hand movements via computer vision (Java; OpenCV)']
		},
		{
			title: 'Arduino Construction',
			company: 'IEEE, ACM, and Maker Club joint workshop',
			duration: 'Jan. 2017',
			info: ['Assembled and soldered an Arduino from scratch and programmed a photoresistor-controlled LED array (Arduino)']
		},
		{
			title: 'Processing 3 and p5.js (animation libraries)',
			company: 'Independent Study',
			duration: 'Nov. 2016 -- Jan. 2017',
			info: ['Implemented agent modelling techniques to simulate seeking, flocking, and predator-prey hunting (Java; JavaScript)',
			'Will lead a tutorial session on JavaScript and p5.js for the Association for Computing Machinery chapter']
		},
		{
			title: 'HorsePlay',
			company: 'NYLF: Engineering and Technology',
			duration: 'July 2015',
			info: ['Implemented vector-based physics and linear interpolation to ensure that characters smoothly track the curvature of the ground (C#; Unity)']

		},
		{
			title: 'Volunteer Dental Assistant',
			company: 'God Will Provide, Chisua, Mozambique',
			duration: 'October 24, 2014 -- November 4, 2014',
			info: ['Assisted in over 400 teeth extractions and led teeth-brushing classes for over 200 children']
		}
	];
	$scope.involvement = [
		'Association for Computing Machinery (Webmaster)',
		'Math/CS Society (VP of Math)',
		'Pi Mu Epsilon Honors Society (Secretary)',
		'STEM Student Advisory Committee (Math/CS Representative)',
		'Mathematical Association of America (Member)'
	];
	$scope.interests = [
		'Cooking',
		'Board Games',
		'Long-distance running',
		'Hiking',
		'Cooking',
		'Rock climbing',
		'Gardening',
		'Puzzles',
		'Animals',
		'Board games',
		'Video games',
		'Painting',
		'Travel'
	];
}]);
