FbApp.ChartView = Backbone.View.extend({

	initialize : function() {
		this.model.on('change:chartData', this.render, this);
		this.$chart = this.$el.find('#chart');
	},

	render : function(collection) {
		this.$chart.append($('#chart').highcharts({
			chart : {
				plotBackgroundColor : null,
				plotBorderWidth : null,
				plotShadow : false
			},
			title : {
				text : this.model.get('title')
			},
			tooltip : {
				pointFormat : '{series.name}: <b>{point.percentage}%</b>',
				percentageDecimals : 1
			},
			plotOptions : {
				pie : {
					allowPointSelect : true,
					cursor : 'pointer',
					dataLabels : {
						enabled : false
					},
					showInLegend : true
				}
			},
			series : [ {
				type : 'pie',
				name : 'Pourcentage ',
				data : this.model.get('chartData')
			} ]
		}));
	}
});