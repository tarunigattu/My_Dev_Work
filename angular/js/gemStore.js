(function(){
	var module = angular.module('gemStore', ['global']);

	module.directive('productPanels', function(){
		return {
			restrict: 'E',
			templateUrl: '../angular/product-panels.html',
			controller: function(){
				this.tab = 1;
				this.setTab = function(newTab){
					this.tab = newTab;
				};
				this.isSelected = function(currTab){
					return (this.tab === currTab);
				};
			},
			controllerAs: 'panel'
		};
	});

	module.controller('ReviewController', function(){
		this.review = {};
		this.addReview = function(gem){
			console.log(this.review);
			gem.reviews.push(this.review);
			this.review = {};
		};
	});	

	module.controller('GlobalController', function(){
		this.name = 'Gem Store';
		this.year = "Since 1996";
		this.currYear = new Date().getYear() + 1900;
	});

	module.controller("StoreController", ['$http', function($http){
		var store = this;
		$http.get("../angular/data/gems.json").success(function(data){
			store.gems = data;
		});
	}]);

})();