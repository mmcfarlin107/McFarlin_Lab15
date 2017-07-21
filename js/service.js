var app = angular.module('madlibs');

app.service('madService', function() {
  var person = {};

  this.getPerson = function() {
    return person;
  }
  this.setPerson = function(personObj) {
    person = personObj;
  }
});
