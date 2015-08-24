'use strict';

angular.module('fitFriend')

.factory('User', function() {

  let _user;

  let service = {
    get: get,
    set: set
  };

  return service;


  function get() {
    return _user;
  }

  function set(user) {
    user = (typeof user === 'string') ? JSON.parse(user) : user;
    _user = user;
  }

});