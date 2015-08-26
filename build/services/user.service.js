'use strict';

angular.module('fitFriend')

.factory('User', function($window, $http) {

  let _user = {};

  let service = {
    get: get,
    getFullUser: getFullUser,
    set: set,
    setId: setId,
    saveToLocalStorage: saveToLocalStorage
  };

  return service;


  function get() {
    return _user;
  }

  function getFullUser() {
    return $http.get(`http://localhost:3000/users/${_user._id}`);
  }

  function set(user) {
    user = (typeof user === 'string') ? JSON.parse(user) : user;
    _user = user;
  }

  function setId(user) {
    user = (typeof user === 'string') ? JSON.parse(user) : user;
    _user._id = user._id;
  }

  // this should only be called when user updates email
  function saveToLocalStorage(user) {
    user = (typeof user !== 'string') ? JSON.stringify(user) : user;
    $window.localStorage.setItem('user', user);
    service.set(user);
  }

});