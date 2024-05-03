const app = angular.module("InternalDashboardPage", []);
app.controller(
  "InternalDashboardPageCtrl",
  ($scope, $filter, $timeout, $http) => {
    CheckingLoginExist("../login");
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

    $scope.HighestRatings = [
      {
        id: 1,
        Title: "Airstrait",
        Detail: "Blue/Copper",
        Stars: 5,
        Reviews: 23,
        Thumb:
          "https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/images/products/hero/389923-01.png?$responsive$&cropPathE=mobile&fit=stretch,1&wid=440",
      },
      {
        id: 2,
        Title: "Airstrait",
        Detail: "Blue/Copper",
        Stars: 5,
        Reviews: 23,
        Thumb:
          "https://media.glamourmagazine.co.uk/photos/645e048159411ece04184318/1:1/w_1280%2Cc_limit/DYSON%2520120523%2520553-PDP-specification-BNKBCO-leap-magento.jpg",
      },
      {
        id: 3,
        Title: "Airstrait",
        Detail: "Blue/Copper",
        Stars: 5,
        Reviews: 23,
        Thumb:
          "https://dyson-h.assetsadobe2.com/is/image/content/dam/dyson/images/products/primary/448799-01.png",
      },
    ];

    $scope.RecentOrders = [
      {
        id: 1,
        MediaTeam: "McKenzie",
        OrderNumber: "12284",
        OrderDate: "23/04/2024",
        AmountOfProducts: 3,
        Status: "Delivered",
        TrackingNumber: "34912A",
      },
      {
        id: 2,
        MediaTeam: "KPMG",
        OrderNumber: "12284",
        OrderDate: "13/02/2024",
        AmountOfProducts: 8,
        Status: "In Transit",
        TrackingNumber: "32982C",
      },
    ];
  }
);
