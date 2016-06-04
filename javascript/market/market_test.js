'use strict';
console.log("Testing: Market Controler")
describe('marcApp.market module', function() {
	var controller, candyPeople, industry, scope
	beforeEach(module('marcApp'));
	beforeEach(module('marcApp.market'));

	//setup services and controller.
	beforeEach(inject(function (_candyPeople_, _industry_, $controller, $rootScope) {
	    candyPeople = _candyPeople_;
	    industry = _industry_;
	    scope = $rootScope.$new();
	    controller = $controller('MarketCtrl', {
	      $scope: scope
	    });
	    window.localStorage.clear();
  	}));

    it('Should exsist', function() {
      	expect(marcApp).to.exist;
	});

	it("should have MarketCtrl", function() {
		expect(controller).to.exist;
	});

	it("should have buy multiplier", function(){
		expect(scope).to.have.property("buyMultiplier").to.be.ok
	})

	it("should be able to set buy multiplier", function(){
		var oldValue = scope.buyMultiplier;
		var newValue = 10;
		
		//change the multiplier.
		scope.setMultiplier(newValue);

		//check if change went through
		expect(scope).property("buyMultiplier").to.not.equal(oldValue)
		expect(scope).property("buyMultiplier").to.equal(newValue)
	})

	it("set multiplier to undefined should throw",function(){
		function fn(){scope.setMultiplier()}
		expect(fn).throw();

	})

	it("function isActive should correctly report buyMultiplier",function(){
		
		var current = scope.buyMultiplier;
		expect(scope.isActive(current)).to.be.ok
		expect(scope.isActive(1000)).to.not.be.ok
	});

});



