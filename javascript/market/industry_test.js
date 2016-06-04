'use strict';

describe('Industry', function() {
	console.log("Testing: Industry.")
	expect = chai.expect;
	var controller, candyPeople, industry, scope, offset = 10
	beforeEach(module('marcApp'));
	beforeEach(function(){
		localStorage.clear();
	})

	//setup services and controller.
	beforeEach(inject(function (_candyPeople_, _industry_, $controller, $rootScope) {
	    candyPeople = _candyPeople_;
	    industry = _industry_;
  	}));

	it("should exsist", function() {
		expect(industry).to.exist;
	});
	
	describe("constructor", function(){
		var sampleIndustry;
		beforeEach(function(){
			sampleIndustry = new industry.comodity("Taffy", 10, 15)
		})

		it("assigns a name", function(){
			expect(sampleIndustry).to.have.property('name', 'Taffy');
		})
	})

	describe("method", function(){
		var sampleIndustry;
		beforeEach(function(){	
			sampleIndustry = new industry.comodity("Taffy", 10, 15)
		})

		it("buy should only work when there's sugar", function(){
			expect(sampleIndustry.getCount()).to.equal(0);
			sampleIndustry.buy(1)
			expect(sampleIndustry.getCount()).to.equal(0);
		})

		it("buy should increase item when there's sugar", function(){
			expect(sampleIndustry.getCount()).to.equal(0);
			industry.sugar.buy(100000)	
			sampleIndustry.buy(1)
			expect(sampleIndustry.getCount()).to.equal(1);
		})

		it("sell should increase number of sugar", function(){
			sampleIndustry.sell();
			expect(industry.sugar.getCount()).to.equal(0);
			expect(sampleIndustry.getCount()).to.equal(0);
			
			sampleIndustry.makeItem(1* offset)
			expect(sampleIndustry.getCount()).to.be.above(0);
			sampleIndustry.sell();
			expect(industry.sugar.getCount()).to.be.above(0);
		})


	})
});



