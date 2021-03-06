Tasks = new Mongo.Collection('tasks');

if (Meteor.isClient) {

  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });

  // This code only runs in the client
  angular.module('simple-todos', ['angular-meteor', 'accounts.ui']);

  function onReady() {
    angular.bootstrap(document, ['simple-todos']);
  }

  if(Meteor.isCordova) {
    angular.element(document).on('deviceready', onReady);
  } else {
    angular.element(document).ready(onReady);
  }

  angular.module('simple-todos').controller('TodosListCtrl', ['$scope', '$meteor',
    function($scope, $meteor) {

      $scope.tasks = $meteor.collection( function() {
        return Tasks.find($scope.getReactively('query'), { sort: { createdAt: -1 } });
      });

      $scope.addTask = function(newTask) {
        // $scope.tasks.push( {
        //   text: newTask,
        //   createdAt: new Date(),              // current time
        //   owner: Meteor.userId(),             // _id of logged in user
        //   username: Meteor.user().username }  // username of logged in user
        // );
        $meteor.call('addTask', newTask);
      };

      $scope.deleteTask = function(task) {
        $meteor.call('deleteTask', task._id);
      };

      $scope.setChecked = function(task) {
        $meteor.call('setChecked', task._id, !task.checked);
      };

      $scope.$watch('hideCompleted', function() {
         if($scope.hideCompleted) {
           $scope.query = { checked: {$ne: true} };
         } else {
           $scope.query = {};
         }
      });

      $scope.incompleteCount = function() {
         return Tasks.find({ checked: {$ne: true} }).count();
      };

    }]
  );

  Meteor.methods({
    addTask: function(text) {
      // Make sure that the user is logged in before inserting a task
      if(!Meteor.userId()) {
        throw new Meteor.Error('not-authorized');
      }
      Tasks.insert({
        text: text,
        createdAt: new Date(),
        owner: Meteor.userId(),
        username: Meteor.user().username
      });
      console.log(Meteor.userId(), Meteor.user().username);
    },
    deleteTask: function(taskId) {
      Tasks.remove(taskId);
    },
    setChecked: function(taskId, setChecked) {
      Tasks.update(taskId, { $set: { checked: setChecked } });
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
