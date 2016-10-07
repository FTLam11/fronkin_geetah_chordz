var geetah = angular.module('geetah', ['ui.router', 'ngAnimate']);

geetah.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
  $stateProvider
    .state('geetah', {
      url: '/',
      templateUrl: '/geetah/_geetah.html',
      controller: 'GeetahCtrl'
    });

    $locationProvider.html5Mode(true);

    $urlRouterProvider.otherwise('/');
}]);