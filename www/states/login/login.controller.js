'use strict';

angular.module('fitFriend')

.controller('LoginCtrl', function($scope) {

  var name, email, code;
  $scope.emailed = false;

  $scope.submitEmail = function(nameInput, emailInput) {
    $scope.emailed = true;
    name = nameInput;
    email = emailInput;
  };

  $scope.submitCode = function(codeInput) {
    code = code;
    $state.go('app.home');
  };

});