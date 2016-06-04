'use strict';

//write code to manage prisoners
(function() {
	var peppermintUpgrades = function(UpgradeConstructor, industry, candyPeople) {
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
				industry: industry.jawBreaker,//industry to use in cost 
				cost: 50000,//numerical cost
				title: "Jawbreakers!",//wity title
				description: "Buy your first PepperMint!",//text that refferences pop culture
				effectedItem: candyPeople.peppermint,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 24,//how far down the list should this be? 
				type: "seed"
			}
		));			



		
		self.push(new Upgrade({
				industry: industry.peppermint,//industry to use in cost 
				cost: 300,//numerical cost
				title: "Extra Minty",//wity title
				description: "Gives you that fresh feeling. +100% PepperMint production",//text that refferences pop culture
				effectedItem: peppermint,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 25,//how far down the list should this be?  
			}
		));		
		self.push(new Upgrade({
				industry: industry.peppermint,//industry to use in cost 
				cost: 1000,//numerical cost
				title: "PepperMint Tootpaste",//wity title
				description: "Brilliant! Surely no one has thought of this! +100% PepperMint production",//text that refferences pop culture
				effectedItem: peppermint,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 26,//how far down the list should this be?  
			}
		));	
		self.push(new Upgrade({
				industry: industry.peppermint,//industry to use in cost 
				cost: 2000,//numerical cost
				title: "Spearmint",//wity title
				description: "The pointyest of all mints. +100% PepperMint production",//text that refferences pop culture
				effectedItem: peppermint,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 27,//how far down the list should this be?  
			}
		));
		self.push(new Upgrade({
				industry: industry.peppermint,//industry to use in cost 
				cost: 20000,//numerical cost
				title: "WinterMint",//wity title
				description: "Only available 3 months out of the year. +100% PepperMint production",//text that refferences pop culture
				effectedItem: peppermint,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 32,//how far down the list should this be?  
			}
		));
		self.push(new Upgrade({
				industry: industry.rockCandy,//industry to use in cost 
				cost: 15000,//numerical cost
				title: "Jelly Clusters",//wity title
				description: "Jellybeans clustered on a stick! +100% peppermint production",//text that refferences pop culture
				effectedItem: peppermint,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 41,//how far down the list should this be?  
			}
		));
		self.push(new Upgrade({
				industry: industry.peppermint,//industry to use in cost 
				cost: 300000,//numerical cost
				title: "Star mints",//wity title
				description: "Introduce sweet flavors to accompany the bite of the mint.",//text that refferences pop culture
				effectedItem: peppermint,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 51,//how far down the list should this be?  
			}
		));
		self.push(new Upgrade({
				industry: industry.peppermint,//industry to use in cost 
				cost: 300000,//numerical cost
				title: "Edible Wrappers",//wity title
				description: "Peppermint with edible wrappers are much easier to eat.",//text that refferences pop culture
				effectedItem: peppermint,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 52,//how far down the list should this be?  
			}
		));
		self.push(new Upgrade({
				industry: industry.peppermint,//industry to use in cost 
				cost: 300000,//numerical cost
				title: "Snake oil mints",//wity title
				description: "Most original upgrade name +100% RockCandy production",//text that refferences pop culture
				effectedItem: peppermint,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 53,//how far down the list should this be?  
			}
		));


		return self;
	};

	var module = angular.module('marcApp');
	module.factory('peppermint', peppermintUpgrades);
}());
