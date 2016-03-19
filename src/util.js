Array.prototype.Unique = function(){
	var unique = [];
	this.forEach(function(e, i, a){
		if(!unique.includes(e)){
			unique.push(e);
		}
	});
	return unique;
};

String.prototype.removeNonChars = function(){
	return this.replace(/[^a-zA-Z0-9 -]/gi, "");
};

Array.prototype.sortByFrequency = function () {
	var freq = {};
	this.map(function(e, i, a){
		if(e in freq){
			freq[e]++;
		} else {
			freq[e] = 1;
		}
	});

	return this.sort(function(a, b){
		return freq[a] - freq[b];
	});
};
