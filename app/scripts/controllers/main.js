'use strict';

/**
 * @ngdoc function
 * @name untitledApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the untitledApp
 */
angular.module('untitledApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.age = calculateAge();

    function calculateAge() {
      var birthDate = new Date("4/22/1994");
      var today = new Date();
      return Math.floor((today.getTime() - birthDate.getTime()) / (1000 * 3600 * 24 * 365));
    }
  }]);
