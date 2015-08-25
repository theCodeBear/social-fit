'use strict';

angular.module('fitFriend')

.directive('addItem', () => {

  return {
    restrict: 'EA',
    templateUrl: 'directives/partials/addItem.html'
  };

});