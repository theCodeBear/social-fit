'use strict';

angular.module('fitFriend')

.controller('TrainingPartnersCtrl', function($scope) {

  $scope.emailFound = {};
  $scope.find = { email: ''};
  $scope.search = {};

  $scope.findEmail = function() {
    $scope.emailFound.name = true;
    $scope.find.email = '';
    $scope.search.found = true;
  };

});