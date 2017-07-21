var app = angular.module('madlibs');

app.controller('inputController', function($scope, madService, $location){
$scope.submitPerson = function(personObj){
madService.setPerson(personObj);
$location.path('/madlib');
}})

// app.controller('inputCtrl', function($scope, wordFactory, $location) {
//
//   $scope.submitWords = function(wordsObj) {
//     wordFactory.setWords(wordsObj);
//     $location.path('/output');
//   };
//
//   $scope.sayHi = function() {
//     wordFactory.sayHelloToUser();
//   }
//
// });
