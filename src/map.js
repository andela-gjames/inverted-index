
var Map = function(){
		this.map = [];
};

Map.prototype.has = function(key) {
	var result = this.map.find(function(item){
		return item.key === key;
	});

	return !!result;
};

Map.prototype.add = function (key, value) {
	var result = this.map.find(function(item){
		return item.key === key;
	});

	if(result === undefined){
		this.map.push({key: key, value: value});
	} else {
		var index = this.map.indexOf(result);
		this.map[index] = ({key: key, value: value});
	}
};

Map.prototype.get = function(key){
	var result = this.map.find(function(item){
		return item.key === key;
	});

	if(result !== undefined){
		return result.value;
	} else {
		return null;
	}
};

Map.prototype.getAll = function () {
	return this.map;
};

Map.prototype.count = function () {
	return this.map.length();
};

Map.prototype.toString = function(){
	return this.map;
};
