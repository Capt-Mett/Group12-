const app = angular.module("InternalDashboardPage", []);
app.controller(
  "InternalDashboardPageCtrl",
  ($scope, $filter, $timeout, $http) => {
    $scope.leftmenu = "../view/partial/leftmenu.html";
  }
);
