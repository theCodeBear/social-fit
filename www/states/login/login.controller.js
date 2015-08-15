'use strict';

angular.module('fitFriend')

.controller('LoginCtrl', function($scope, $state) {

  var name, email, code;
  $scope.emailed = false;

  $scope.submitEmail = function(nameInput, emailInput) {
    $scope.emailed = true;
    name = nameInput;
    email = emailInput;
  };

  $scope.submitCode = function(codeInput) {
    code = code;
    $state.go('contacts');
  };

});