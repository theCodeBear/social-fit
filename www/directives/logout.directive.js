'use strict';

angular.module('fitFriend')

.directive('logOut', function($auth, $state, $window) {

  return {
    restrict: 'A',
    link: function(scope, elem, attrs) {
      elem.bind('click', function() {
        $auth.logout();
        $window.localStorage.removeItem('user');
        $state.go('login');
      });
    }
  };
  
})