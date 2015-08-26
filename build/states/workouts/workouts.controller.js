'use strict';

angular.module('fitFriend')

.controller('WorkoutsCtrl', ($scope, $http, User, $state, $rootScope) => {

  // FUNCTION ASSIGNMENTS
  $scope.addItem = addItem;

  // LOCAL VARIABLES
  const userId = User.get()._id;

  // SCOPE VARIABLES
  $scope.newWorkout = {};
  $scope.item = {};
  $scope.placeholder = 'Workout Name';
  $scope.workouts = User.get().workouts;

  // RUN ON CONTROLLER LOAD
  $rootScope.$on('full user retrieved', () => {
    $scope.workouts = User.get().workouts;
  });

  // FUNCTIONS
  function addItem(title) {
    // $scope.workouts.unshift({title: title});
    $scope.item.title = '';
    $state.go('app.createWorkout', { workoutTitle: title });
  };

});