var app = angular.module('madlibs');

  app.controller('outputCtrl', function($scope, madService) {

    $scope.retrievedPerson = madService.getPerson();
    });
