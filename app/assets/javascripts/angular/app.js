inventoryTracker = angular.module("inventoryTracker", [
  'templates',
  'ngRoute',
  'ngResource'
]);

angular.module("inventoryTracker").controller("usersList", function ($scope, $http) {
  $scope.app = "Testing AngularJS";
  $scope.users = [];

  $http({
    method: 'GET',
    url: 'http://localhost:3000/users.json'
  }).then(function successCallback(response) {
      $scope.users = response.data; // this is gonna access all the data from the JSON
      $scope.firstUser = response.data[0].email; // this is gonna access the email of the first user
    }, function errorCallback(response) {
      console.log("test-error");
    });
});
