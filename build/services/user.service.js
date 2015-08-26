'use strict';

angular.module('fitFriend')

.factory('User', function($window, $http) {

  let _user;

  let service = {
    get: get,
    getFullUser: getFullUser,
    set: set,
    saveToLocalStorage: saveToLocalStorage,
    addWorkout: addWorkout
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

  function saveToLocalStorage(user) {
    user = (typeof user !== 'string') ? JSON.stringify(user) : user;
    $window.localStorage.setItem('user', user);
    service.set(user);
  }

  function addWorkout(workout) {
    _user.workouts.push(workout);
  }

});