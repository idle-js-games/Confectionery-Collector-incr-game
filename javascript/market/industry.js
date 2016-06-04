'use strict';

//write code to manage prisoners
(function() {
	var industry = function($http, $interval, Achievement) {
		var comodity = function(name, sell, buy) {
			var count = 0;
			var efficiency = 0.1;
			var self = {};
		
			self.name = name;
			self.imgfullsrc = name ? 'images/' + name + '-CANDY.png' : 'images/missingno.png';
			self.getSell = sell;
			self.getBuy = buy;
			self.achievements = [];

			self.getCount = function() {
				return count;
			};

			self.makeItem = function(amount) {
				chai.assert.isNumber(amount, 'string');
				count += amount * efficiency;
			};

			self.useItem = function(cost) {
				count -= cost;
			};

			self.buy = function(amount) {
				expect(amount).to.be.ok.and.a('number');
				if (amount && sugar.getCount() >= buy * amount) {
					count += amount || 1;
					sugar.useItem(buy * amount);
					self.saveState();
				}

				self.checkYourSelf()
			};

			//for debugging
			self.efficiency = function(){return efficiency;}

			self.upgrade = function(amount){
				efficiency += amount;
			}

			self.sell = function() {
				if (count >= 1) {
					sugar.buy(count * sell);
					count = 0;
					self.saveState();
				}
			};

			self.setAcheivements = function(achievement) {
				self.achievements = achievement;
			};

			self.saveState = function() {
				window.localStorage.setItem('industry-' + name, count);

			};

			self.loadState = function() {
				var state = Number(window.localStorage.getItem('industry-' + name));
				if (!state) {
					count = Number(sessionStorage.getItem('industry-' + name)) || 0;
					self.saveState();
				} else if (state) {
					count = state;
				}
			};
			
			self.checkYourSelf = function(){
				for(var item in self.achievements){
					self.achievements[item].check();
				}
			}


			return self;
		};

		var sugar = new comodity('Sugar', 0, 0);
		//sugar.achievements.push(new Achievement(sugar, 1, "First Grains", "Earn your first sugar from the market"))
		//sugar.achievements.push(new Achievement(sugar, 100, "Starting the Sugar", "Get 100 sugar from the market"))

		var comodities = {
			sugar: sugar,
			taffy: new comodity('Taffy', 10, 15),
			jellyBean: new comodity('JellyBean', 30, 50),
			doughNut: new comodity('Doughnut', 100, 600),
			jawBreaker: new comodity('Jawbreaker', 250, 1000),
			peppermint: new comodity('Peppermint', 600, 3000),
			rockCandy: new comodity('Rock-Candy', 1500, 9000)
		};

		//load all the states
		for (name in comodities) {
			comodities[name].loadState();
		}

		//save every so often
		var save = $interval(function saveComodities() {
			for (name in comodities) {
				comodities[name].saveState();
			}
			toastr.info("Game Saved");
		},
		30000);

		//expose comodity in prototype for unit tests
		Object.defineProperty(comodities, 'comodity', {
		  enumerable: false,
		  value: comodity
		});

		//expose for unit tests
		Object.defineProperty(comodities, 'save', {
		  enumerable: false,
		  value: save
		});

		return comodities;

	};

	var module = angular.module('marcApp');
	module.factory('industry', industry);
}());
