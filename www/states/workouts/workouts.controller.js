'use strict';

angular.module('fitFriend').controller('WorkoutsCtrl', function ($scope) {

  $scope.newWorkout = {};
  $scope.workouts = [{
    title: 'Legs/Core'
  }, {
    title: 'Upper Body'
  }, {
    title: 'Running'
  }];

  $scope.addWorkout = function (title) {
    $scope.workouts.unshift({ title: title });
    $scope.newWorkout.title = '';
  };
});