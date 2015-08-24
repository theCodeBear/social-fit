'use strict';

angular.module('fitFriend')

.factory('_', function($window) {

  const _ = $window._;
  delete($window._);

  return _;

});