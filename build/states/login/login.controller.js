'use strict';

angular.module('fitFriend')

.controller('LoginCtrl', function($scope, $state, $http, $auth, $window, User) {

  $scope.emailed = false;
  $scope.security = {};
  $scope.login = {};

  $scope.submitEmail = function(creds) {
    $http.post('http://localhost:3000/user/login', creds)
    .then(function(data) {
      $scope.emailed = true;
      alert('You have been sent an email with your one time login code. It may take a few minutes for the email to arrive.');
    }).catch(function(data) {
      alert(data.data);
    });
  };

  $scope.submitCode = function(codeInput, login) {
    // $http.post('http://localhost:3000/user/authenticate', {email: login.email, name: login.name, code: codeInput.code})
    $auth.login({email: login.email, name: login.name, code: codeInput.code})
    .then(function(response) {
      console.log(response.data.user);
      $window.localStorage.setItem('user', JSON.stringify(response.data.user));
      User.set($window.localStorage.getItem('user'));
      $state.go('contacts');
    }).catch(function(response) {
      alert(response.data);
    });
  };

});