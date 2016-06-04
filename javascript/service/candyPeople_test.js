'use strict';

describe('CandyPeople', function() {
	console.log("Testing: Candy People.");
	var expect = chai.expect;
	var controller, candyPeople, industry, scope, offset = 10;
	//offset is how much production is how much production is divided by;

	beforeEach(module('marcApp'));

	//setup services
  	beforeEach(inject(function($injector){
  		candyPeople = $injector.get("candyPeople");
	    industry = $injector.get("industry");
  	}));

	it("should exsist", function() {
		expect(industry).to.exist;
	});

	
	describe('constructor', function(){
		var sample, sampleIndustry, name, production, cost, id;
		beforeEach(function(){
			sampleIndustry = new industry.comodity("itemtest", 10, 15);

			name = "personTest"; production = "1"; cost = 10; id = 1;
			sample = new candyPeople.CandyPerson(name, sampleIndustry, production, cost, id);
		});
		

		it("assigns an image name", function(){
			expect(sample).to.have.property('imgName', 'personTest');
		});

		it("assigns the industry", function(){
			expect(sample).to.have.property('industry', sampleIndustry);
		});
		it("assigns cost", function(){
			expect(sample.getCost()).to.equal(cost);
			expect(sample.getCost()).to.be.ok;

		});
	});

	describe('method', function(){
		var sample, sampleIndustry, name, production, cost, id, fn;
		beforeEach(function(){
			sampleIndustry = new industry.comodity("itemtest", 10, 15);

			name = "personTest"; production = "1"; cost = 10; id = 1;
			sample = new candyPeople.CandyPerson(name, sampleIndustry, production, cost, id);
		});
		

		it("getCount should return count", function(){
			expect(sample.getCount()).to.equal(0);

			//change count
			sample.seed();
			expect(sample.getCount()).to.equal(1);

		});

		it("getCostProgress should return a percent", function(){
			fn = sample.getCostProgress;
			expect(fn()).to.equal(0);
			expect(fn()).to.be.within(0, 100);

			//check to make sure percentage doesn't go higher then 100
			sample.industry.makeItem(2 * cost * offset);
			expect(fn()).to.be.equal(100);
			expect(sample.getCostProgress()).to.be.within(0, 100);
		});

		it("getCostProgress should go up, if industry item increases", function(){
			fn = sample.getCostProgress;

			var oldValue = fn();
			sample.industry.makeItem(1);
			expect(fn()).to.above(oldValue);
		});

		it("mkTaffyPerson should only increase population when price is met", function(){
			sample.mkTaffyPerson();
			expect(sample.getCount()).to.equal(0);

			sample.industry.makeItem(cost * offset);
			sample.mkTaffyPerson();
			expect(sample.getCount()).to.equal(1);
		});

		it("produce should increase industry quantity", function(){
			var oldValue = sample.getCount();
			expect(sample.industry.getCount()).to.equal(0);

			//should not produce if there are no population
			sample.produce();
			expect(sample.industry.getCount()).to.equal(oldValue);


			sample.seed();
			sample.produce();
			expect(sample.industry.getCount()).to.be.above(oldValue);
		});
	});




});



