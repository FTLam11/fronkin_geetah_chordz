var geetah = angular.module('geetah', ['ui.router', 'ngAnimate']);

geetah.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('geetah', {
      url: '/',
      templateUrl: '/fronkin_geetah_chordz/geetah/geetahTemp.html',
      controller: 'GeetahCtrl'
    });

    $urlRouterProvider.otherwise('/');
}]);