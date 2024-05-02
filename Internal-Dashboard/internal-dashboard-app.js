const app = angular.module("InternalDashboardPage", []);
app.controller(
  "InternalDashboardPageCtrl",
  ($scope, $filter, $timeout, $http) => {
    $scope.leftmenu = "../view/partial/leftmenu.html";
    $scope.BoxDisplayOne = "../view/partial/boxStyleOne.html";

    $scope.inventorys = [
      {
        title: "Expexted Orders",
        count: 2,
        link: "//google.com",
      },
      {
        title: "Expexted Orders",
        count: 5,
        link: "//google.com",
      },
      {
        title: "Expexted Orders",
        count: 75,
        link: "//google.com",
      },
    ];
  }
);
