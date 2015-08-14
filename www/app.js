// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('fitFriend', ['ionic'])

.run(function($ionicPlatform) {
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
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('login', {
    url: '/login',
    templateUrl: 'states/login/login.html',
    // controller: 'LoginCtrl'
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
        templateUrl: 'states/home/home.html'
        // controller: 'splashScreenCtrl'
      }
    }
  })

  .state('app.contacts', {
    url: '/contacts',
    views: {
      'menuContent': {
        templateUrl: 'states/contacts/contacts.html'
        // controller: 'splashScreenCtrl'
      }
    }
  })

  .state('app.email', {
    url: '/email',
    views: {
      'menuContent': {
        templateUrl: 'states/email/email.html'
        // controller: 'splashScreenCtrl'
      }
    }
  })

  .state('app.spotify', {
    url: '/spotify',
    views: {
      'menuContent': {
        templateUrl: 'states/spotify/spotify.html'
        // controller: 'splashScreenCtrl'
      }
    }
  })

  .state('app.schedule', {
    url: '/schedule',
    views: {
      'menuContent': {
        templateUrl: 'states/schedule/schedule.html'
        // controller: 'splashScreenCtrl'
      }
    }
  })

  .state('app.workouts', {
    url: '/workouts',
    views: {
      'menuContent': {
        templateUrl: 'states/workouts/workouts.html'
        // controller: 'splashScreenCtrl'
      }
    }
  })

  .state('app.todaysWorkout', {
    url: '/todaysWorkout',
    views: {
      'menuContent': {
        templateUrl: 'states/todaysWorkout/todaysWorkout.html'
        // controller: 'splashScreenCtrl'
      }
    }
  })

  .state('app.createWorkout', {
    url: '/createWorkout',
    views: {
      'menuContent': {
        templateUrl: 'states/createWorkout/createWorkout.html'
        // controller: 'splashScreenCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});
