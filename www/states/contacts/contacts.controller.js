'use strict';

angular.module('fitFriend')

.controller('ContactsCtrl', function($scope, $ionicPlatform, $cordovaContacts, _) {

  $scope.contacts = [];   // array of {name: String, email: Array}
  $scope.emailFound;
  $scope.find = { email: ''};

  $ionicPlatform.ready(function() {
    $cordovaContacts.find({desiredFields: ['name', 'emails']}).then(function(contacts) {
      var count = 0;
      contacts.forEach(function(contact) {
        if (contact.emails) {
          $scope.contacts.push({name: '', email: []});
          $scope.contacts[count].name = contact.displayName;
          contact.emails.forEach(function(email) {
            $scope.contacts[count].email.push(email.value);
          });
          count++;
        }
      });
      // console.log(JSON.stringify($scope.contacts, null, 2));
    });
  });

  $scope.addContacts = function() {
  };

  $scope.findEmail = function() {
    $scope.find.email = '';
  };

});