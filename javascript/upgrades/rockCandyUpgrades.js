'use strict';

//write code to manage prisoners
(function() {
	var rockCandyUpgrades = function(UpgradeConstructor, industry, candyPeople) {
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
				industry: industry.peppermint,//industry to use in cost 
				cost: 25000,//numerical cost
				title: "RockCandy!",//wity title
				description: "Buy your first RockCandy!",//text that refferences pop culture
				effectedItem: candyPeople.rockCandy,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 33,//how far down the list should this be? 
				type: "seed"
			}
		));	
		self.push(new Upgrade({
				industry: industry.rockCandy,//industry to use in cost 
				cost: 100,//numerical cost
				title: "Sticks!",//wity title
				description: "New stick technology for holding your RockCandy. +100% RockCandy production",//text that refferences pop culture
				effectedItem: rockCandy,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 34,//how far down the list should this be?  
			}
		));			
		self.push(new Upgrade({
				industry: industry.rockCandy,//industry to use in cost 
				cost: 500,//numerical cost
				title: "Granite",//wity title
				description: "Rockin new candy flavor. +100% RockCandy production",//text that refferences pop culture
				effectedItem: rockCandy,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 35,//how far down the list should this be?  
			}
		));		
		self.push(new Upgrade({
				industry: industry.rockCandy,//industry to use in cost 
				cost: 1000,//numerical cost
				title: "New Processing",//wity title
				description: "Same great taste, new blue color. +100% RockCandy production",//text that refferences pop culture
				effectedItem: rockCandy,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 36,//how far down the list should this be?  
			}
		));
		self.push(new Upgrade({
				industry: industry.taffy,//industry to use in cost 
				cost: 300000,//numerical cost
				title: "Chewy Rocks",//wity title
				description: "The chewyest! +100% RockCandy production",//text that refferences pop culture
				effectedItem: rockCandy,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 42,//how far down the list should this be?  
			}
		));
		self.push(new Upgrade({
				industry: industry.jellyBean,//industry to use in cost 
				cost: 300000,//numerical cost
				title: "Mystery Rocks",//wity title
				description: "Mystery flavored. Totaly not sugar. +100% RockCandy production",//text that refferences pop culture
				effectedItem: rockCandy,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 43,//how far down the list should this be?  
			}
		));
		self.push(new Upgrade({
				industry: industry.doughNut,//industry to use in cost 
				cost: 300000,//numerical cost
				title: "Baked rocks",//wity title
				description: "New magma flavor! +100% RockCandy production",//text that refferences pop culture
				effectedItem: rockCandy,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 44,//how far down the list should this be?  
			}
		));
		self.push(new Upgrade({
				industry: industry.jawBreaker,//industry to use in cost 
				cost: 300000,//numerical cost
				title: "Rock layers",//wity title
				description: "A geologists faverite! +100% RockCandy production",//text that refferences pop culture
				effectedItem: rockCandy,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 45,//how far down the list should this be?  
			}
		));
		self.push(new Upgrade({
				industry: industry.peppermint,//industry to use in cost 
				cost: 300000,//numerical cost
				title: "Minty rocks",//wity title
				description: "Most original upgrade name +100% RockCandy production",//text that refferences pop culture
				effectedItem: rockCandy,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 46,//how far down the list should this be?  
			}
		));
		


		return self;
	};

	var module = angular.module('marcApp');
	module.factory('rockCandy', rockCandyUpgrades);
}());
