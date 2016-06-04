'use strict';

angular.module('marcApp.market', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/Industry', {
        templateUrl : 'javascript/market/market.html',
        controller  : 'MarketCtrl'
    })
}])

// create the controller and inject Angular's $scope
.controller('MarketCtrl', ["$scope", "candyPeople", "industry", "upgrades", function($scope, candyPeople, industry, upgrades) {

    //angular needs an array
    var output = [];
    for(var i in industry){
        output.push(industry[i]);
    }
    $scope.upgrades = upgrades.upgrades;

    //pull sugar out because it's the currency of the market
    $scope.sugar = output.shift();
    $scope.buyMultiplier = Number(window.localStorage.getItem('buyMultiplier')) || 1;

    $scope.setMultiplier = function(amount){
        expect(amount).to.be.within(0,100);
        window.localStorage.setItem('buyMultiplier', amount)
        $scope.buyMultiplier = amount
    }

    $scope.getMaxBuy = function(item){
        if(!$scope.buyMultiplier){
            return Math.floor($scope.sugar.getCount()/item.getBuy);    
        }
    }

    $scope.industry = output

    $scope.isActive = function(value) {
        return $scope.buyMultiplier === value;
  }; 
    
    
}]);