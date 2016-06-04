'use strict';

//write code to manage prisoners
(function() {
	var candyPeople = function($http, $interval, industry, Achievement) {
		//Candy Person base class.
		//industry = link to industry object for production methods
		//production = how much one unit will make.
		//cost = starting cost of one unit.
		//exponent = cost's exponential growth.
		var CandyPerson = function(imgName, industry, production, cost, id) {
			expect(cost).to.be.ok;
			expect(production).to.be.ok;
			expect(id).to.be.ok;

			var population = 0;
			var self = {};
			self.id = id || 0;
			self.imgName = imgName || 'missingno';
			self.imgfullsrc = imgName ? 'images/' + imgName + '.png' : 'images/missingno.png';
			self.industry = industry;
			self.production = production;
			self.achievements = [];

			self.getCount = function() {
				return population;
			};

			self.getCost = function() {
				return Math.pow(population, 2) + cost;
			};

			self.getCostProgress = function() {
				var progress = industry.getCount() / self.getCost();
				if (progress > 1) {
					return 100;
				}
				return progress * 100;
			};

			self.mkTaffyPerson = function() {
				var cost = self.getCost();
				if (industry.getCount() >= cost) {
					industry.useItem(cost);
					population += 1;
					self.checkYourSelf();
					//wreck yourself. 
					self.saveState();
				}
			};

			self.seed = function() {
				population = 1;
				self.saveState();
			};

			self.saveState = function() {
				window.localStorage.setItem(self.imgName + '-' + id, population);
			};

			self.loadState = function() {

				var state = Number(window.localStorage.getItem(self.imgName + '-' + id));
				if (!state) {
					population = Number(sessionStorage.getItem(self.imgName + '-' + id)) || 0;
					self.saveState();
				} else if (state) {
					population = state;
				}
			};

			self.produce = function() {
				if (population > 0) {
					industry.makeItem(population * self.production);
				}
			};

			self.checkYourSelf = function(){
				for(var item in self.achievements){
					self.achievements[item].check();
				}
			};

			return self;
		};

		var people = {
			taffy: new CandyPerson('taffy', industry.taffy, 1, 10, 1),
			jellyBean: new CandyPerson('jellybean', industry.jellyBean, 1, 10, 2),
			doughNut: new CandyPerson('doughnut', industry.doughNut, 1, 10, 3),
			jawBreaker: new CandyPerson('jawbreaker', industry.jawBreaker, 1, 10, 4),
			peppermint: new CandyPerson('peppermint', industry.peppermint, 1, 10, 5),
			rockCandy: new CandyPerson('rockCandy', industry.rockCandy, 1, 10, 6)
		};
		//(item, amount, title, description)
		people.taffy.achievements.push(new Achievement(people.taffy, 2, "Humble Beginnings", "Make your first Taffy person"));
		people.jellyBean.achievements.push(new Achievement(people.jellyBean, 1,"Jelly Time", "Create your first Jelly Person!"));
		people.doughNut.achievements.push(new Achievement(people.doughNut, 1, "Hello Donut", "Breath life into donut kind"));
		people.jawBreaker.achievements.push(new Achievement(people.jawBreaker, 1, "Jaw Cracker", "Create first living Jawbreaker"));
		people.peppermint.achievements.push(new Achievement(people.peppermint, 1, "Super Fresh", "Manifest Sentient Peppermints"));
		people.rockCandy.achievements.push(new Achievement(people.rockCandy, 1, "Purity", "Refine the purest Rock Candy"));
		people.rockCandy.achievements.push(new Achievement(people.rockCandy, 2, "Goddamit Jesse", "Make a second Sentient Rock Candy"));
		//now load stuff.
		for (var name in people) {
			people[name].loadState();
		}

		//start game off with one taffy person
		if (!people.taffy.getCount()) {
			people.taffy.seed();
		}


		var incrementInterval = $interval(function harvestTaffy() {
			for (name in people) {
				people[name].produce();
			}
		},100);


		//expose candyPerson in prototype for unit tests
		Object.defineProperty(people, 'CandyPerson', {
		  enumerable: false,
		  value: CandyPerson
		});



		return people;
	};


	var module = angular.module('marcApp');
	module.factory('candyPeople', candyPeople);
}());
