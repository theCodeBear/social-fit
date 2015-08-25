'use strict';

angular.module('fitFriend')

.directive('addExercise', () => {

  return {
    restrict: 'AE',
    templateUrl: 'directives/partials/addExercise.html'
  };

});