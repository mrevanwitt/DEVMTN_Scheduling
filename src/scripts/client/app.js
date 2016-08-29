angular
	.module('schedulingproto', ['ui.router', 'ngAnimate'])
	.config(function($stateProvider, $urlRouterProvider) {
		$stateProvider.state('home', {
			url: '/home',
			templateUrl: './www/views/home.html'
		});

		$urlRouterProvider.otherwise('home');
	});
