'use strict';

//write code to manage prisoners
(function() {
	var jellyBeanUpgrades = function(UpgradeConstructor, industry, candyPeople) {
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
				industry: industry.taffy,//industry to use in cost 
				cost: 30,//numerical cost
				title: "Jelly Beans",//wity title
				description: "Buy your first jelly bean",//text that refferences pop culture
				effectedItem: candyPeople.jellyBean,//what industry does this actually upgrade?
				upgrade: 0.1,//upgrade by how much math? 
				id: 3,//how far down the list should this be? 
				type: "seed"
			}
		));
		self.push(new Upgrade({
				industry: industry.jellyBean,//industry to use in cost 
				cost: 100,//numerical cost
				title: "New flavors!",//wity title
				description: "No guarantee of any good flavors. +100% JellyBeans",//text that refferences pop culture
				effectedItem: jellyBean,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 5,//how far down the list should this be? 
			}
		));
		self.push(new Upgrade({
				industry: industry.taffy,//industry to use in cost 
				cost: 10000,//numerical cost
				title: "Taffy Jellys!",//wity title
				description: "Who says you can't make Jellybeans out of taffy?. +100% JellyBean production",//text that refferences pop culture
				effectedItem: jellyBean,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 6,//how far down the list should this be? 
			}
		));
		self.push(new Upgrade({
				industry: industry.jellyBean,//industry to use in cost 
				cost: 1000,//numerical cost
				title: "Large JellyBeans",//wity title
				description: "Make new larger Jellybeans! Warning:keep out of reach of small children. +100% JellyBean production",//text that refferences pop culture
				effectedItem: jellyBean,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 7,//how far down the list should this be? 
			}
		));
		self.push(new Upgrade({
				industry: industry.jellyBean,//industry to use in cost 
				cost: 2000,//numerical cost
				title: "Large JellyBeans",//wity title
				description: "Make new larger JellyBeans! Warning:keep out of reach of small children. +100% JellyBean production",//text that refferences pop culture
				effectedItem: jellyBean,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 8,//how far down the list should this be? 
			}
		));
		self.push(new Upgrade({
				industry: industry.jellyBean,//industry to use in cost 
				cost: 3000,//numerical cost
				title: "Tiny JellyBeans",//wity title
				description: "Technicly a net increase in JellyBeans. +100% JellyBean production",//text that refferences pop culture
				effectedItem: jellyBean,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 9,//how far down the list should this be? 
			}
		));
		self.push(new Upgrade({
				industry: industry.peppermint,//industry to use in cost 
				cost: 7000,//numerical cost
				title: "JellyMints",//wity title
				description: "Sometimes you get mint, sometimes you get popcorn flavored. +100% Jellybean production",//text that refferences pop culture
				effectedItem: jellyBean,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 29,//how far down the list should this be?  
			}
		));
		self.push(new Upgrade({
				industry: industry.rockCandy,//industry to use in cost 
				cost: 3000,//numerical cost
				title: "Jelly Clusters",//wity title
				description: "Jellybeans clustered on a stick! +100% JellyBean production",//text that refferences pop culture
				effectedItem: jellyBean,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 38,//how far down the list should this be?  
			}
		));
		self.push(new Upgrade({
				industry: industry.peppermint,//industry to use in cost 
				cost: 300000,//numerical cost
				title: "Absinthe Jellybeans",//wity title
				description: "Same taste, different kick.",//text that refferences pop culture
				effectedItem: jellyBean,//what industry does this actually upgrade?
				upgrade: 0.02,//upgrade by how much math? 
				id: 48,//how far down the list should this be?  
			}
		));


		return self;
	};

	var module = angular.module('marcApp');
	module.factory('jellyBean', jellyBeanUpgrades);
}());
