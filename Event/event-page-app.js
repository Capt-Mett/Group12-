const app = angular.module("EventPage", []);
app.controller("EventPageCtrl", ($scope, $filter, $timeout, $http) => {
  $scope.leftmenu = "../view/partial/leftmenu.html";
});
