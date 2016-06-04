'use strict';

//write code to manage prisoners
(function() {
	var achievements = function($http, $interval) {
		//first load all achievements from local storage.
		var achievement = function(item, amount, title, description) {
			var self = {};
			self.unlocked = localStorage.getItem(title) || false;
			self.id = 0;
			self.item = item;
			self.amountNeeded = amount;
			self.title = title;
			self.description = description;

			

			self.win = function() {
				self.unlocked = true;
				localStorage.setItem( self.title, self.unlocked);
				//using a global variable in angular is no good
				toastr.success(self.description, self.title);
			};

			self.check = function() {
				if(self.item instanceof Array){
					var upgradeCount = 0;
					for(var upgrade in self.item){
						if(self.item[upgrade].unlocked){
							upgradeCount + 1
						}
					}

					if (!self.unlocked && upgradeCount >= self.amountNeeded) {
						self.win();
					}

				} else {
					if (!self.unlocked && self.item.getCount() >= self.amountNeeded) {
						self.win();
					}
				}
			};
			return self;
		};

		return achievement;
	};

	var module = angular.module('marcApp');
	module.factory('Achievement', achievements);
}());
