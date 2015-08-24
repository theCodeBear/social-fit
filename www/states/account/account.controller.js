'use strict';

angular.module('fitFriend').controller('AccountCtrl', function ($scope, User) {

  $scope.user = {};
  $scope.user.email = User.get().email;
});