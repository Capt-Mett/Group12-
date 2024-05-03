const app = angular.module("ExternalDashboard", []);
app.controller("ExternalDashboardCtrl", ($scope, $filter, $timeout, $http) => {
  CheckingLoginExist("./login");
  $scope.leftmenu = "view/partial/leftmenu.html";
  $scope.BoxDisplayOne = "view/partial/boxStyleOne.html";
  $scope.LoginExist = CheckingLoginAvariable();
  $scope.inventorys = [
    {
      title: "Expected Orders",
      count: 4,
      link: "//google.com",
    },
    {
      title: "Expected Orders",
      count: 5,
      link: "//google.com",
    },
    {
      title: "Expected Orders",
      count: 75,
      link: "//google.com",
    },
  ];

  $scope.UppcomingEvents = [
    {
      title: "Beauty Conference",
      overDate: false,
      link: "//google.com",
      status: "Product Status",
      location: "Los Angeles",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    },
    {
      title: "Beauty Conference",
      overDate: true,
      link: "//google.com",
      status: "Product Status",
      location: "Los Angeles",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    },
    {
      title: "Beauty Conference",
      overDate: false,
      link: "//google.com",
      status: "Product Status",
      location: "Los Angeles",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    },
  ];
});
