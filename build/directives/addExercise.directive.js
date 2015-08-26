'use strict';

angular.module('fitFriend')

.directive('addExercise', () => {

  return {
    restrict: 'AE',
    templateUrl: 'directives/partials/addExercise.html',
    link: ($scope, elem, attrs) => {
      $scope.exercise.type = 'reps';
      $scope.showChecked = (checked) => {
        $scope.exercise.sets = null;
        $scope.exercise.reps = null;
        $scope.exercise.mins = null;
        $scope.exercise.secs = null;
        $scope.exercise.type = (checked) ? 'time' : 'reps';
        $scope.exerciseIcon = (checked) ? '<i class="ion-clock time-type"></i>' : '';
      };

      $scope.addExercise = (exercise) => {
        console.log(exercise);
        if (exercise.type === 'time') {
          if (exercise.secs === null) exercise.secs = 0;
          if (exercise.mins === null) exercise.mins = 0;
          if (exercise.secs < 10) exercise.secs = `0${exercise.secs}`;
        }
        $scope.workout.exercises.push(exercise);
        $scope.exercise = {};
        $scope.item.checked = false;
        $scope.showChecked(false);
      };
    }
  };

});