'use strict';

//write code to manage prisoners
(function() {
	var doughNutUpgrades = function(UpgradeConstructor, industry, candyPeople) {
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
				industry: industry.jellyBean,//industry to use in cost 
				cost: 10000,//numerical cost
				title: "Doughnut",//wity title
				description: "Buy your first Doughnut!",//text that refferences pop culture
				effectedItem: candyPeople.doughNut,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 10,//how far down the list should this be? 
				type: "seed"
			}
		));
		self.push(new Upgrade({
				industry: industry.doughNut,//industry to use in cost 
				cost: 200,//numerical cost
				title: "Glazed Doughnuts",//wity title
				description: "Now with glaze! +100% Doughnut production",//text that refferences pop culture
				effectedItem: doughNut,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 11,//how far down the list should this be? 
			}
		));
		self.push(new Upgrade({
				industry: industry.taffy,//industry to use in cost 
				cost: 20000,//numerical cost
				title: "Sprinkled Doughnuts",//wity title
				description: "Little taffy Sprinkles in every bite. +100% Doughnut production",//text that refferences pop culture
				effectedItem: doughNut,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 12,//how far down the list should this be? 
			}
		));
		self.push(new Upgrade({
				industry: industry.doughNut,//industry to use in cost 
				cost: 5000,//numerical cost
				title: "Doughnut Holes",//wity title
				description: "Little Doughnut bites. +100% Doughnut production",//text that refferences pop culture
				effectedItem: doughNut,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 13,//how far down the list should this be?  
			}
		));
		self.push(new Upgrade({
				industry: industry.doughNut,//industry to use in cost 
				cost: 10000,//numerical cost
				title: "Holeless Doughnuts",//wity title
				description: "Get the entire Doughnut! +100% Doughnut production",//text that refferences pop culture
				effectedItem: doughNut,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 14,//how far down the list should this be?  
			}
		));
		self.push(new Upgrade({
				industry: industry.doughNut,//industry to use in cost 
				cost: 20000,//numerical cost
				title: "Maple Bars",//wity title
				description: "Elongated Doughnut goodness. +100% Doughnut production",//text that refferences pop culture
				effectedItem: doughNut,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 15,//how far down the list should this be?  
			}
		));
		self.push(new Upgrade({
				industry: industry.jawBreaker,//industry to use in cost 
				cost: 3000,//numerical cost
				title: "Stale Doughnuts",//wity title
				description: "Some people like them... +100% Doughnut production",//text that refferences pop culture
				effectedItem: doughNut,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 23,//how far down the list should this be?  
			}
		));
		self.push(new Upgrade({
				industry: industry.peppermint,//industry to use in cost 
				cost: 10000,//numerical cost
				title: "Plain Doughnut",//wity title
				description: "What? you expected mint? +100% Doughnut production",//text that refferences pop culture
				effectedItem: doughNut,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 30,//how far down the list should this be?  
			}
		));		
		self.push(new Upgrade({
				industry: industry.rockCandy,//industry to use in cost 
				cost: 5000,//numerical cost
				title: "BearClaws",//wity title
				description: "The most grizzly of the doughnuts. +100% Doughnut production",//text that refferences pop culture
				effectedItem: doughNut,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 39,//how far down the list should this be?  
			}
		));


		return self;
	};

	var module = angular.module('marcApp');
	module.factory('doughNut', doughNutUpgrades);
}());
