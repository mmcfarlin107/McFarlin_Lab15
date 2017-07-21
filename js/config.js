var app = angular.module('madlibs');

app.config(function($routeProvider) {
  $routeProvider
    .when('/input', {
      controller: 'inputController',
      templateUrl: 'input.html'
    })
    .when('/madlib', {
      controller: 'outputCtrl',
      templateUrl: 'madlib.html'
    })
    .otherwise({
      redirectTo: '/input'
    });
});
