'use strict';

//write code to manage prisoners
(function() {
	var taffyUpgrades = function(UpgradeConstructor, industry, candyPeople, Achievement) {
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
		***********************************

		self.push(new Upgrade(
			data = {
				industry: ,//industry to use in cost 
				cost: ,//numerical cost
				title: ,//wity title
				description: ,//text that refferences pop culture
				effectedItem: taffy,//what industry does this actually upgrade?
				upgrade: ,//upgrade by how much math? 
				id: ,//how far down the list should this be? 
			}
		));

		***********************************
		***********************************/

		self.push(new Upgrade({
				industry: industry.taffy,//industry to use in cost 
				cost: 100,//numerical cost
				title: "Red Taffy",//wity title
				description: "Inject the color red into taffy. +100% taffy production",//text that refferences pop culture
				effectedItem: taffy,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 1,//how far down the list should this be? 
			}
		));

		self.push(new Upgrade({
				industry: industry.taffy,//industry to use in cost 
				cost: 2000,//numerical cost
				title: "Pink Taffy",//wity title
				description: "The most feminine of the taffy world. +100% taffy production",//text that refferences pop culture
				effectedItem: taffy,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 2,//how far down the list should this be? 
			}
		));

		self.push(new Upgrade({
				industry: industry.jellyBean,//industry to use in cost 
				cost: 100,//numerical cost
				title: "Wax Paper",//wity title
				description: "Wax paper made of ground up jelly beans. +100% taffy production",//text that refferences pop culture
				effectedItem: taffy,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 4,//how far down the list should this be? 
			}
		));
	
		self.push(new Upgrade({
				industry: industry.jawBreaker,//industry to use in cost 
				cost: 1000,//numerical cost
				title: "Hard Taffy",//wity title
				description: "Hardest taffy in the land. +100% Taffy production",//text that refferences pop culture
				effectedItem: taffy,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 20,//how far down the list should this be?  
			}
		));
		self.push(new Upgrade({
				industry: industry.jellyBean,//industry to use in cost 
				cost: 100000,//numerical cost
				title: "Chewy Taffy",//wity title
				description: "Jelly Chew taffy for hours of chewing. +100% Taffy production",//text that refferences pop culture
				effectedItem: taffy,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 21,//how far down the list should this be?  
			}
		));					

		self.push(new Upgrade({
				industry: industry.peppermint,//industry to use in cost 
				cost: 5000,//numerical cost
				title: "Mint Taffy",//wity title
				description: "New Mint Taffy. +100% Taffy production",//text that refferences pop culture
				effectedItem: taffy,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 28,//how far down the list should this be?  
			}
		));

		self.push(new Upgrade({
				industry: industry.rockCandy,//industry to use in cost 
				cost: 2000,//numerical cost
				title: "Crunchy Taffy",//wity title
				description: "Little bite sized rock candy pieces. +100% Taffy production",//text that refferences pop culture
				effectedItem: taffy,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 37,//how far down the list should this be?  
			}
		));

		self.push(new Upgrade({
				industry: industry.peppermint,//industry to use in cost 
				cost: 300000,//numerical cost
				title: "Taffy Offering",//wity title
				description: "Increase taffy production by paying a certain buttler in peppermints to grant us favor",//text that refferences pop culture
				effectedItem: taffy,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 47,//how far down the list should this be?  
			}
		));
			





		return self;
	};

	var module = angular.module('marcApp');
	module.factory('taffy', taffyUpgrades);
}());
