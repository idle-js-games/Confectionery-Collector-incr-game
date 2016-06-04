'use strict';

var marcApp = angular.module('marcApp', ['ngRoute', 'chart.js', 'marcApp.market','marcApp.achievements']);
// configure our routes
marcApp.config(function($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl: 'views/prisoners.html',
            controller: 'PrisonersController'
        })
        // route for the home page
        .when('/Overview', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // route for the security page
        .when('/Security', {
            templateUrl: 'views/security.html',
            controller: 'SecurityController'
        })
        // route for the prisoners page
        .when('/Prisoners', {
            templateUrl: 'views/prisoners.html',
            controller: 'PrisonersController'
        })
        // route for the reports page
        .when('/Reports', {
            templateUrl: 'views/reports.html',
            controller: 'ReportsController'
        })
        
        .otherwise({redirectTo: '/'});
    }
);

marcApp.run(function() {
    if(FastClick){
        FastClick.attach(document.body);
    }
});


//Sidebar controller to change tab highlight
marcApp.controller('SideBar', function($scope, $location, upgrades) {
    $scope.isActive = function(route) {
        $scope.path = $location.path();
        return $location.path() === route;
      };
});


marcApp.controller('MainController', ['$scope', 'candyPeople', 'industry', 'stats', 'upgrades', function($scope, candyPeople, industry, stats, upgrades) {

    console.log('hodor');

    $scope.workers = stats.getPopulation;
    $scope.items = industry;
    $scope.data = [
      stats.getDistribution(),
    ];
    $scope.labels = ['Taffy', 'JellyBeans', 'DoughNuts', 'JawBreakers', 'Peppermint', 'RockCandy'];

}]);

marcApp.controller('StockController', ['$scope', 'stats', '$timeout', function($scope, stats, $timeout) {

      $scope.series = ['Taffy', 'JellyBeans', 'DoughNuts', 'JawBreakers', 'Peppermint', 'RockCandy'];
      $scope.labels = [30, '', '', '', '', 25, '', '', '', '', 20, '', '', '', '', 15, '', '', '', '', 10, '', '', '', '', 5, '', '', '', 1];

        $scope.data = stats.getHistory;
        $timeout(function() {$scope.data = stats.getHistory();}, 1);

}]);

// create the controller and inject Angular's $scope
marcApp.controller('PrisonersController', ['$scope', 'candyPeople', 'industry', function($scope, candyPeople, industry) {

    console.log('prisoners');

    $scope.items = industry;

    //we need to use candypeople as an array
    //because angular only filters on arrays when using ng-repeat
    var output = [];
    for (var i in candyPeople) {
        output.push(candyPeople[i]);
    }
    $scope.candyPeople = output;

}]);

var expect = chai.expect;
