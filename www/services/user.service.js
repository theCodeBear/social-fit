'use strict';

angular.module('fitFriend')

.factory('User', function() {

  var _user;

  var service = {
    get: get,
    set: set
  };

  return service;


  function get() {
    return _user;
  }

  function set(user) {
    _user = user;
  }

});