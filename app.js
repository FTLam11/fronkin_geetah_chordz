var geetah = angular.module('geetah', ['ui.router', 'templates']);

geetah.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tuning', {
      url: '/',
      templateUrl: 'tuning/_tuning.html',
      controller: 'TuningCtrl'
    });

    $urlRouterProvider.otherwise('tuning');
}]);