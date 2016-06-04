'use strict';

//write code to manage prisoners
(function() {
	var Upgrades = function() {
		/*
		data = {
			industry: industry to use in cost 
			cost: numerical cost
			title: wity title
			description: text that refferences pop culture
			effectedItem: what industry does this actually upgrade?
			upgrade: upgrade by how much math? 
			id: how far down the list should this be? 
		}
		*/

		var Upgrade = function(data) {
			expect(data).to.be.ok;
			expect(data.title).to.be.ok;
			expect(data.id).to.be.ok;

			//expose arguments
			var self = {};
			self.id = data.id || 0;
			self.title = data.title || 'missingno';
			self.description = data.description || '???';
			self.type = data.type || "upgrade";
			self.industry = data.industry;
			self.effectedItem = data.effectedItem;
			self.upgrade = data.upgrade;
			self.cost = data.cost
			self.unlocked = false;

			self.getCount = function() {
				return population;
			};

			self.getCost = function() {
				return data.cost;
			};

			self.getCostProgress = function() {
				var progress = item.getCount() / self.getCost();
				if (progress > 1) {
					return 100;
				};
				return progress * 100;
			};

			self.buy = function(){
				if (!self.unlocked && self.industry.getCount() >= data.cost) {
					self.unlocked = true;
					self.industry.useItem(data.cost);
					if(self.type === "upgrade"){
						self.effectedItem.upgrade(self.upgrade);
					} else if( self.type === "seed"){
						self.effectedItem.seed();
					} else {
						console.log("UPGRADE DID NOT DO SHIT BRO.")
					}
					self.saveState();

					if(self.checkAchievements !== null){
						self.checkAchievements();
					}
				}
			}

			self.checkAchievements = null;


			self.saveState = function() {
				window.localStorage.setItem('UPGR-' + self.id + '-' + self.title, self.unlocked);
			};

			self.loadState = function() {

				var state = window.localStorage.getItem('UPGR-' + self.id + '-' + self.title);
				if (state) {
					self.unlocked = state;
					if(self.type === "upgrade"){
						self.effectedItem.upgrade(self.upgrade);
					}
				}
			};
			self.loadState();

			return self;
		};
		
		return Upgrade;
	};


	var module = angular.module('marcApp');
	module.factory('UpgradeConstructor', Upgrades);
}());
