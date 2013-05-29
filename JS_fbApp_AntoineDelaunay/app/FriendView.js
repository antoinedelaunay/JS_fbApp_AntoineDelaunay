FbApp.FriendView = Backbone.View.extend({
	className : "friend-item span3",
	tmpl : _.template($('#friendTmpl').html()),

	initialize : function() {
	},

	render : function() {
		this.$el.html(this.tmpl(this.model.toJSON()));
		return this;
	}
});