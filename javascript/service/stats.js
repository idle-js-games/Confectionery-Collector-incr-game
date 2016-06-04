'use strict';

//write code to manage prisoners
(function() {
	var stats = function($http, $interval, industry, candyPeople) {
		var self = {};
		var history = {};

		var track = function() {
			//for each comodity
			for (var name in industry) {
				if (name == 'sugar') {
					continue;
				}
				var comodity = industry[name];
				//make sure array exists. Ternary operator? meh.
				if (!history[name]) {

					history[name] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
				}

				if (history[name].length >= 30) {
					history[name].shift();
				}

				history[name].push(comodity.getCount());

			}
			//if array is more then 20, remove first element.
			//add in last number.
		};
		track();

		self.getHistory = function() {
			var data = [];
			for (var i in history) {
				data.push(history[i]);
			}
			return data;
		};

		self.getPopulation = function() {
			var total = 0;
			for (var i in candyPeople) {
				total += candyPeople[i].getCount();
			}
			return total;
		};


		self.getDistribution = function() {
			return [
					candyPeople.taffy.getCount(),
					candyPeople.jellyBean.getCount(),
					candyPeople.doughNut.getCount(),
					candyPeople.jawBreaker.getCount(),
					candyPeople.peppermint.getCount(),
					candyPeople.rockCandy.getCount()
				];
		};

		self.incrementInterval = $interval(function harvestTaffy() {
			track();
		},
		8000);

		return self;


	};

	var module = angular.module('marcApp');
	module.factory('stats', stats);
}());
