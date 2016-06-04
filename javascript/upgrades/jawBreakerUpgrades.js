'use strict';

//write code to manage prisoners
(function() {
	var jawBreakerUpgrades = function(UpgradeConstructor, industry, candyPeople) {
		var Upgrade = UpgradeConstructor;
		var taffy = industry.taffy;
		var jellyBean = industry.jellyBean;
		var doughNut = industry.doughNut;
		var peppermint = industry.peppermint;
		var jawBreaker = industry.jawBreaker;
		var rockCandy = industry.rockCandy;
		var self = [];
		
		//Uuuupgrade template; verbose cause i'm gonna forget
		/**********************************

		self.push(new Upgrade(
			data = {
				industry: ,//industry to use in cost 
				cost: ,//numerical cost
				title: ,//wity title		***********************************

				description: ,//text that refferences pop culture
				effectedItem: taffy,//what industry does this actually upgrade?
				upgrade: ,//upgrade by how much math? 
				id: ,//how far down the list should this be? 
			}
		));
		***********************************
		***********************************/
		self.push(new Upgrade({
				industry: industry.doughNut,//industry to use in cost 
				cost: 50000,//numerical cost
				title: "Jawbreakers!",//wity title
				description: "Buy your first JawBreaker!",//text that refferences pop culture
				effectedItem: candyPeople.jawBreaker,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 16,//how far down the list should this be? 
				type: "seed"
			}
		));	
		self.push(new Upgrade({
				industry: industry.jawBreaker,//industry to use in cost 
				cost: 1000,//numerical cost
				title: "Harder Jawbreakers",//wity title
				description: "Made even tougher for more broken teeth! +100% JawBreaker production",//text that refferences pop culture
				effectedItem: jawBreaker,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 17,//how far down the list should this be?  
			}
		));		
		self.push(new Upgrade({
				industry: industry.jawBreaker,//industry to use in cost 
				cost: 2000,//numerical cost
				title: "More Colors!",//wity title
				description: "More fun colors to lick through to. +100% JawBreaker production",//text that refferences pop culture
				effectedItem: jawBreaker,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 18,//how far down the list should this be?  
			}
		));	
		self.push(new Upgrade({
				industry: industry.taffy,//industry to use in cost 
				cost: 100000,//numerical cost
				title: "Sweet Breakers",//wity title
				description: "Taffy enhanced JawBreaker goodness. +100% JawBreaker production",//text that refferences pop culture
				effectedItem: jawBreaker,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 19,//how far down the list should this be?  
			}
		));
		self.push(new Upgrade({
				industry: industry.jawBreaker,//industry to use in cost 
				cost: 5000,//numerical cost
				title: "Everlasting JawBreaker",//wity title
				description: "They never run out of flavor. +100% JawBreaker production",//text that refferences pop culture
				effectedItem: jawBreaker,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 22,//how far down the list should this be?  
			}
		));
		self.push(new Upgrade({
				industry: industry.peppermint,//industry to use in cost 
				cost: 15000,//numerical cost
				title: "Minty Layer",//wity title
				description: "One sweet layer of PepperMint +100% JawBreaker production",//text that refferences pop culture
				effectedItem: jawBreaker,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 31,//how far down the list should this be?  
			}
		));
		self.push(new Upgrade({
				industry: industry.rockCandy,//industry to use in cost 
				cost: 10000,//numerical cost
				title: "Jawbreaker ona Stick",//wity title
				description: "Does this really need an explanation? +100% Jawbreaker production",//text that refferences pop culture
				effectedItem: jawBreaker,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 40,//how far down the list should this be?  
			}
		));
		self.push(new Upgrade({
				industry: industry.peppermint,//industry to use in cost 
				cost: 300000,//numerical cost
				title: "Jaw Breaker Gaurdians",//wity title
				description: "Protect the kingdom with these giant constructs",//text that refferences pop culture
				effectedItem: jawBreaker,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 49,//how far down the list should this be?  
			}
		));
		self.push(new Upgrade({
				industry: industry.peppermint,//industry to use in cost 
				cost: 300000,//numerical cost
				title: "Steel Jaws",//wity title
				description: "Increase the efficiency of taste testing batch. +20%",//text that refferences pop culture
				effectedItem: jawBreaker,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 50,//how far down the list should this be?  
			}
		));


		return self;
	};

	var module = angular.module('marcApp');
	module.factory('jawBreaker', jawBreakerUpgrades);
}());
