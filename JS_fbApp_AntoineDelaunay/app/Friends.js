FbApp.Friends = Backbone.Collection.extend({
	model : FbApp.Friend,
	initialize : function() {
		this.sortField = 'name';
		this.filteredColl = this;
	},
	filterBySearch : function(value) {
		value = value.toLowerCase();
		this.filteredColl = _(this.filter(function(friend) {
			return friend.get('name').toLowerCase().indexOf(value) != -1;
		}));

		this.sortCollection();
		this.trigger('reset', this.sortCollection());
	},
	sortCollection : function() {
		
		this.filteredColl = _(this.filteredColl
				.sortBy(this._visitor[this.sortField]));
		return this.filteredColl;
	},
	setSortBy : function(what) {
		this.sortField = what;
		this.sortCollection();
		this.trigger('reset', this.sortCollection());
	},
	_visitor : {
		name : function(friendModel) {
			return friendModel.get('name');
		},
		birthday : function(friendModel) {
			return Date.parse(friendModel.get('birthday_date'));
		},
	}
});