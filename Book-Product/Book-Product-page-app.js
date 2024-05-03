const app = angular.module("BookPage", []);
app.controller("BookPageCtrl", ($scope, $filter, $timeout, $http) => {
  CheckingLoginExist("../login");
  $scope.leftmenu = "../view/partial/leftmenu.html";
  $scope.LoginExist = CheckingLoginAvariable();
});
