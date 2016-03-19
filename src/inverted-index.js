var Index = function(){
	this.index = new Map();
};

Index.prototype.createIndex = function(urlPath, callback){
	var self = this;
	var promise = self.readFile(urlPath);
	var result = [];
	promise.then(function(data){
		data.forEach(function(e, i, a){
			var doc = e.text
							.toLowerCase()
							.removeNonChars()
							.split(" ").Unique();
			self.associateIndex(doc, i);
		});
		callback();
	});
};

Index.prototype.associateIndex = function(doc, index){
	var self = this;

	doc.forEach(function(e, i){
		if(self.index.has(e)){
			var temp = self.index.get(e);
            temp.push(index);
            self.index.add(e, temp);
		}  else{
            self.index.add(e, [index]);
        }
	});
};

Index.prototype.getIndex = function(){
	return this.index;
};

Index.prototype.searchIndex = function(searchTerms){
	var index = this.index;
	var result = [];
	if(searchTerms.constructor !== Array){
		searchTerms = searchTerms
						.toLowerCase()
						.removeNonChars()
						.split(" ").Unique();
	} else {
		searchTerms = searchTerms.join(" ").toLowerCase()
											.removeNonChars()
											.split(" ").Unique();
	}

	searchTerms.forEach(function(e, i, a){
		if(index.has(e)){
			result = result.concat(index.get(e));
		}
	});
	var data = result.sortByFrequency();
	return result.Unique();
};

Index.prototype.readFile = function (urlPath)
{
	return $.get(urlPath, { dataType: "json" });
};
