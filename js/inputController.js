var app = angular.module('madlibs');

app.controller('inputController', function($scope, madService, $location) {
  $scope.submitPerson = function(personObj) {
    madService.setPerson(personObj);
    $location.path('/madlib');
  }
})
