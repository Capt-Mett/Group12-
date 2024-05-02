const app = angular.module("ExternalDashboard", []);
app.controller("ExternalDashboardCtrl", ($scope, $filter, $timeout, $http) => {
  $scope.leftmenu = "view/partial/leftmenu.html";
  $scope.BoxDisplayOne = "view/partial/boxStyleOne.html";
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
