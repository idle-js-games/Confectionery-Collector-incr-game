'use strict';

//write code to manage prisoners
(function() {
	var upgrades = function(industry, taffy, doughNut, jawBreaker, jellyBean, peppermint, rockCandy) {
		//first load all Upgrades from local storage.
		var self = {};
		self.upgrades = [];
		self.achievements = [];

		//concat all upgrades from taffy
		self.upgrades = self.upgrades.concat(taffy);
		self.upgrades = self.upgrades.concat(doughNut)
		self.upgrades = self.upgrades.concat(jawBreaker)
		self.upgrades = self.upgrades.concat(jellyBean)
		self.upgrades = self.upgrades.concat(peppermint)
		self.upgrades = self.upgrades.concat(rockCandy)

		return self;
	};

	var module = angular.module('marcApp');
	module.factory('upgrades', upgrades);
}());
