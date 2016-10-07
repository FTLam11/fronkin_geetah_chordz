var geetah = angular.module('geetah', ['ui.router', 'ngAnimate']);

geetah.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('geetah', {
      url: '/',
      templateUrl: '/geetah/geetahView.html',
      controller: 'GeetahCtrl'
    });

    $urlRouterProvider.otherwise('/');
}]);