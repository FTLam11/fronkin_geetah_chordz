var geetah = angular.module('geetah', ['ui.router']);

geetah.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('geetah', {
      url: '/',
      templateUrl: '/geetah/_geetah.html',
      controller: 'GeetahCtrl'
    });

    $urlRouterProvider.otherwise('/');
}]);