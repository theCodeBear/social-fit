'use strict';

angular.module('fitFriend')

.controller('WorkoutsCtrl', ($scope, $http, User, $state) => {

  // FUNCTION ASSIGNMENTS
  $scope.addItem = addItem;

  // LOCAL VARIABLES
  const userId = User.get()._id;

  // SCOPE VARIABLES
  $scope.newWorkout = {};
  $scope.item = {};
  $scope.placeholder = 'Workout Name';
  $scope.workouts = User.get().workouts;    // NEED TO POPULATE WORKOUTS FROM USER
  // $scope.workouts = [
  //   {
  //     title: 'Legs/Core'
  //   },
  //   {
  //     title: 'Upper Body'
  //   },
  //   {
  //     title: 'Running'
  //   }
  // ];

  // RUN ON CONTROLLER LOAD
  // $http.get(`http://localhost:3000/workouts?user=${userId}`).then(response => {
  //   console.log(response.data);
  //   if (response.data.length) $scope.workouts.push(response.data.workouts);
  // });

  // FUNCTIONS
  function addItem(title) {
    // $scope.workouts.unshift({title: title});
    $scope.item.title = '';
    $state.go('app.createWorkout', { workoutTitle: title });
  };

});