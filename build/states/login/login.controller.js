'use strict';

angular.module('fitFriend')

.controller('LoginCtrl', function($scope, $state, $http, $auth, $window, User) {

  $scope.emailed = false;
  $scope.security = {};
  $scope.login = {};

  $scope.submitEmail = function(creds) {
    $http.post('http://localhost:3000/users/login', creds)
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
      const userForLS = {
        _id: response.data.user._id,
        name: response.data.user.name,
        email: response.data.user.email,
        photoUrl: response.data.user.photoUrl || null
      };
      $window.localStorage.setItem('user', JSON.stringify(userForLS));
      $http.get(`http://localhost:3000/users/${response.data.user._id}`)
      .then((fullUser) => {
        User.set(fullUser.data.user);
        $state.go('contacts');
      });
    }).catch(function(response) {
      alert(response.data);
    });
  };

});