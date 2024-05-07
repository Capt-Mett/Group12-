const app = angular.module("ProductCatelogue", []);
app.controller("ProductCatelogueCtrl", ($scope, $filter, $timeout, $http) => {
  CheckingLoginExist("../login");
  $scope.leftmenu = "../view/partial/leftmenu.html";
  $scope.LoginExist = CheckingLoginAvariable();
});
