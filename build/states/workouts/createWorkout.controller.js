'use strict';

angular.module('fitFriend')

.controller('CreateWorkoutCtrl', ($scope, $state) => {

  // FUNCTION ASSIGNMENTS
  $scope.addExercise = addExercise;
  $scope.saveWorkout = saveWorkout;

  $scope.showChecked = function(checked) {
    $scope.exercise.sets = null;
    $scope.exercise.reps = null;
    $scope.exercise.mins = null;
    $scope.exercise.secs = null;
    $scope.exercise.type = (checked) ? 'time' : 'reps';
    $scope.exerciseIcon = (checked) ? '<i class="ion-clock time-type"></i>' : '';
  }

  // LOCAL VARIABLES

  // SCOPE VARIABLES
  $scope.item = {};
  $scope.exercise = {};
  // $scope.checked = false;
  $scope.exerciseIcon = '';
  $scope.workout = {
    title: $state.params.workoutTitle,
    exercises: []//,
    // amount: []
  };
  // exercises: {title, type, note, time, sets, reps}
  // type is either 'time' or 'reps'


  // RUN ON CONTROLLER LOAD
  

  // FUNCTIONS

  // add exercise title to workout
  function addExercise(exercise) {
    if (exercise.type === 'time') {
      if (exercise.secs === null) exercise.secs = 0;
      if (exercise.mins === null) exercise.mins = 0;
      if (exercise.secs < 10) exercise.secs = `0${exercise.secs}`;
    }
    $scope.workout.exercises.push(exercise);
    $scope.exercise = {};
    $scope.item.checked = false;
    $scope.showChecked(false);
  }

  function saveWorkout(workout) {
    console.log(workout);
  }

});