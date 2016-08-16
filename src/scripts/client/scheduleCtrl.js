angular
	.module('schedulingproto')
	.controller('scheduleCtrl', function($scope, scheduleSrvc) {

		let schedule = [
			[
				{
					topic: 'CSS',
					instructors: ['Ben Callis'],
					description: 'Intro to CSS.'
				},
				{
					topic: 'HTML I',
					instructors: ['Ben Callis'],
					description: 'Intro to HTML.'
				},
				{
					topic: 'HTML II',
					instructors: ['Ben Callis'],
					description: 'Intermediate HTML.'
				},
				{
					topic: 'Basic Javascript',
					instructors: ['Jeremy Robertson'],
					description: 'Intro to Javascript.'
				},
				{
					topic: 'Int. Javascript',
					instructors: ['Jeremy Robertson'],
					description: 'Intermediate Javascript.'
				},
				{
				},
				{
				}
			],
			[
				{
					topic: 'Angular Intro',
					instructors: ['Jeremy Robertson'],
					description: 'Intro to Angular.'
				},
				{
					topic: 'Angular 2',
					instructors: ['Jeremy Robertson'],
					description: 'More Angular.'
				},
				{
					topic: 'jQuery',
					instructors: ['Ben Callis'],
					description: 'Intro to jQuery.'
				},
				{
					topic: 'Node',
					instructors: ['Dallin Crane'],
					description: 'Intro to Node.'
				},
				{
					topic: 'SQL',
					instructors: ['Kendall Griff', 'Jeremy Robertson'],
					description: 'Intro to SQL.'
				},
				{
				},
				{
				}
			],
			[
				{
					topic: '',
					instructors: []
				},
				{
					topic: '',
					instructors: []
				},
				{
					topic: '',
					instructors: []
				},
				{
					topic: '',
					instructors: []
				},
				{
					topic: '',
					instructors: []
				},
				{
					topic: '',
					instructors: []
				},
				{
					topic: '',
					instructors: []
				}
			]
		]

		$scope.week = schedule[0];

		$scope.numberOfWeeks = 9;

		$scope.selectedClassType = 'web_ah';

		$scope.weekRange = function(n) {
				$scope.numberOfWeeks = n;
        return new Array(n);
    };

		$scope.changeWeek = function(n) {
				$scope.week = schedule[n];
    };

		$scope.weekdays = [
			'Mon',
			'Tue',
			'Wed',
			'Thu',
			'Fri',
			'Sat',
			'Sun'
		];

		//need to create an collection of days representing the days scheduled per cohort.
		// enter a start date, and have a list of days populate.

		// let event = {
		// 	'summary': 'event summary',
		// 	'location': '560 S 100 W St, Provo, UT 84601',
		// 	'description': 'I made an event baby.',
		// 	'start': {
		// 		'dateTime': '2016-07-07T14:00:00-07:00',
		// 		'timeZone': 'America/Los_Angeles',
		// 	},
		// 	'end': {
		// 		'dateTime': '2016-07-07T17:00:00-07:00',
		// 		'timeZone': 'America/Los_Angeles',
		// 	},
		// 	'attendees': [
		// 		{
		// 			'email': 'donovan.hiland@gmail.com'
		// 		},
		// 		{
		// 			'email': 'djatbusiness@gmail.com'
		// 		},
		// ],
		// 	'reminders': {
		// 		'useDefault': false,
		// 		'overrides': [
		// 			{
		// 				'method': 'email',
		// 				'minutes': 24 * 60
		// 			},
		// 			{
		// 				'method': 'popup',
		// 				'minutes': 30
		// 			},
		//   ],
		// 	},
		// };

	});
