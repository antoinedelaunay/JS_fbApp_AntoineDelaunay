FbApp.AppView = Backbone.View.extend({
	events : {
		'click #byName' : 'sortByNames',
		'click #byBirthday' : 'sortByBirthdays',
		'keyup #search' : 'filterBySearch',
		'click #status' : 'showRelationShipChart',
		'click #sexe' : 'showSexChart',
		'click #age' : 'showAgeChart',
		'click #city' : 'showCityChart'
	},
	initialize : function() {
		this.collection.on('reset', this.render, this);
		this.$friendList = this.$el.find('.friend-list');
		this.render();
	},
	render : function(collection) {
		var coll = collection || this.collection;
		this.$friendList.empty();
		var $container = $('<div />');
		coll.forEach(function(friend) {
			var view = new FbApp.FriendView({
				model : friend
			});
			$container.append(view.render().$el);
		}, this);
		this.$friendList.append($container);

	},
	sortByNames : function() {
		this.collection.setSortBy('name');
	},
	sortByBirthdays : function() {
		this.collection.setSortBy('birthday');
	},

	filterBySearch : function() {
		this.collection.filterBySearch($('#search').val());
	},

	showRelationShipChart : function() {
		this.relationShipView.render(this.collection);
	},

	showSexChart : function() {
		this.sexView.render(this.collection);
	},

	showAgeChart : function() {
		this.ageView.render(this.collection);
	},
	
	showCityChart : function() {
		this.cityView.render(this.collection);
	},

	Location: function(){
		this.collection.setSortBy('current_location');
	}
});
