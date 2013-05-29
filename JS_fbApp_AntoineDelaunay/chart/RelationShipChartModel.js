FbApp.RelationShipChartModel = FbApp.ChartModel.extend({
	processData : function(collection) {
		var coll = collection || this.collection;
		var data = [];
		coll.forEach(function(friend) {
			data[friend.get('relationship_status')] += 1;
		});

		for ( var i in data) {
			data[i] = 0;
		}

		coll.forEach(function(friend) {
			data[friend.get('relationship_status')] += 1;
		});

		var dataTemp = [];

		for ( var i in data) {
			if (i != "null") {
				dataTemp.push([ i, data[i] ]);
			} else {
				dataTemp.push([ 'Undefined', data[i] ]);
			}

		}
		this.set('chartData', dataTemp);
	}
});