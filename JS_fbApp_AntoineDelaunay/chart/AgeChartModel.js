FbApp.AgeChartModel = FbApp.ChartModel.extend({
	processData : function(collection) {
		var coll = collection || this.collection;
		var data = [];
		coll.forEach(function(friend) {
			var datestr = friend.get('birthday_date');
			if (datestr != null) {
				var date = datestr.split("/");
				if (date[2]) {
					date[2] = new Date().getFullYear() - date[2];
					data[date[2]] += 1;
				} else {
					data["null"] += 1;
				}
			} else {
				data["null"] += 1;
			}
		});

		for ( var i in data) {
			data[i] = 0;
		}

		coll.forEach(function(friend) {
			var datestr = friend.get('birthday_date');
			if (datestr != null) {
				var date = datestr.split("/");
				if (date[2]) {
					date[2] = new Date().getFullYear() - date[2];
					data[date[2]] += 1;
				} else {
					data["null"] += 1;
				}
			} else {
				data["null"] += 1;
			}
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