const app = angular.module("EventPage", []);
app.controller("EventPageCtrl", ($scope, $filter, $timeout, $http) => {
  CheckingLoginExist("../login");
  $scope.leftmenu = "../view/partial/leftmenu.html";
});
