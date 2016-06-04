'use strict';

angular.module('marcApp.achievements', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Achievements', {
        templateUrl : 'javascript/achievements/achievements.html',
        controller  : 'AchievementCtrl'
    })
}])

// create the controller and inject Angular's $scope
.controller('AchievementCtrl', ["$scope", "candyPeople", "industry", function($scope, candyPeople, industry) {
    $scope.achievements = [];
    for (var item in industry){
        $scope.achievements = $scope.achievements.concat(industry[item].achievements)
    }

    for (var item in candyPeople){
        $scope.achievements = $scope.achievements.concat(candyPeople[item].achievements)
    }
}]);