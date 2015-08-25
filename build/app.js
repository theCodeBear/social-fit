'use strict';
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('fitFriend', ['ionic', 'ngCordova', 'angularMoment', 'satellizer'])

.run(function($ionicPlatform, $state, $auth, $rootScope, $window, User) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    User.set($window.localStorage.getItem('user'));
  });


  $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {
    // if not authenticated to go to state
    if (toState.data && toState.data.authenticate && !$auth.isAuthenticated())
      event.preventDefault();
    // prevent going to login state if logged in
    else if (toState.name === 'login' && $auth.isAuthenticated())
      event.preventDefault();
      // $state.go('app.home');
  });


})

.config(function($stateProvider, $urlRouterProvider, $authProvider) {

  $authProvider.loginUrl = 'http://localhost:3000/user/authenticate';

  $stateProvider

  .state('login', {
    url: '/login',
    templateUrl: 'states/login/login.html',
    controller: 'LoginCtrl',
    data: {
      authenticate: false
    }
  })

  .state('contacts', {
    url: '/contacts',
    templateUrl: 'states/contacts/contacts.html',
    controller: 'ContactsCtrl',
    data: {
      authenticate: true
    }
  })

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'states/menu/menu.html',
    // controller: 'MenuCtrl'
  })

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'states/home/home.html',
        controller: 'HomeCtrl'
      }
    },
    data: {
      authenticate: true
    }
  })

  .state('app.trainingPartners', {
    url: '/trainingPartners',
    views: {
      'menuContent': {
        templateUrl: 'states/trainingPartners/trainingPartners.html',
        controller: 'TrainingPartnersCtrl'
      }
    },
    cache: false,
    data: {
      authenticate: true
    }
  })

  .state('app.account', {
    url: '/account',
    views: {
      'menuContent': {
        templateUrl: 'states/account/account.html',
        controller: 'AccountCtrl'
      }
    },
    data: {
      authenticate: true
    }
  })

  .state('app.spotify', {
    url: '/spotify',
    views: {
      'menuContent': {
        templateUrl: 'states/spotify/spotify.html',
        controller: 'SpotifyCtrl'
      }
    },
    data: {
      authenticate: true
    }
  })

  .state('app.schedule', {
    url: '/schedule',
    views: {
      'menuContent': {
        templateUrl: 'states/schedule/schedule.html',
        controller: 'ScheduleCtrl'
      }
    },
    data: {
      authenticate: true
    }
  })

  .state('app.workouts', {
    url: '/workouts',
    views: {
      'menuContent': {
        templateUrl: 'states/workouts/workouts.html',
        controller: 'WorkoutsCtrl'
      }
    },
    data: {
      authenticate: true
    }
  })

  .state('app.createWorkout', {
    url: '/createWorkout',
    views: {
      'menuContent': {
        templateUrl: 'states/workouts/createWorkout.html',
        controller: 'CreateWorkoutCtrl'
      }
    },
    params: {
      workoutTitle: null
    },
    data: {
      authenticate: true
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});
