'use strict';

angular.module('fitFriend').factory('_', function ($window) {

  var _ = $window._;
  delete $window._;

  return _;
});