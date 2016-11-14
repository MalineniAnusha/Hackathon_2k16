// Generated by CoffeeScript 1.9.1
(function() {
  angular.module("forumApp").controller("HomeCtrl", [
    "$scope", "FirebaseFactory", function($scope, FirebaseFactory) {
      var topics;
      topics = FirebaseFactory.getFbRef("topics").$asArray();
      return $scope.topics = topics;
    }
  ]).controller("CreateCtrl", [
    "$scope", "FirebaseFactory", "$location", function($scope, FirebaseFactory, $location) {
      return $scope.postTopic = function() {
        var topics;
        if ($scope.post.topicName === void 0 || $scope.post.body === void 0 || $scope.post.personName === void 0) {
          return alert("Please fill in all the fields");
        } else {
          $scope.post.likes = 0;
          $scope.post.dislikes = 0;
          return topics = FirebaseFactory.insertToFb($scope.post, "topics").then(function(data) {
            alert("The topic has been saved");
            $scope.post = '';
            return $location.path("/");
          });
        }
      };
    }
  ]).controller("PostDetailCtrl", [
    "$scope", "FirebaseFactory", "$routeParams", function($scope, FirebaseFactory, $routeParams) {
      var post, postId;
      postId = $routeParams.postId;
      post = FirebaseFactory.getFbRef("topics/" + postId).$asObject();
      return $scope.post = post;
    }
  ]);

}).call(this);