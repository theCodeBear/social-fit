'use strict';

angular.module('fitFriend')

.controller('CreateWorkoutCtrl', ($scope, $state, $http, User) => {

  // FUNCTION ASSIGNMENTS
  $scope.saveWorkout = saveWorkout;


  // LOCAL VARIABLES

  // SCOPE VARIABLES
  $scope.item = {};
  $scope.exercise = {};
  $scope.exerciseIcon = '';
  $scope.workout = {
    title: $state.params.workoutTitle,
    exercises: []
  };


  // RUN ON CONTROLLER LOAD


  // FUNCTIONS
  function saveWorkout(workout) {
    console.log(workout);
    const user = User.get()._id;
    $http.post(`http://localhost:3000/workouts?user=${user}`, workout).then((response) => {
      console.log(response);
      User.saveToLocalStorage(response.data.user);
      User.addWorkout(workout);
      $state.go('app.workouts');
    }).catch((response) => {
      alert(response.data);
    });
  }

});