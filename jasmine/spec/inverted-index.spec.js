describe("Populate index", function(){
	var index = null;
	beforeAll(function(done){
		index = new Index();
		index.createIndex("./books.json", function(){
			done();
		});
	});

	it("should be able to read the JSON file from the server", function(done){
		expect(index.getIndex().get("alice")).toEqual([0]);
		expect(index.getIndex().get("wizard")).toEqual([1]);
		expect(index.getIndex().get("and")).toEqual([0,1]);
		done();
	});
});


describe("Search index", function(){
	var index = null;

	beforeAll(function(done){
		index = new Index();
		index.createIndex("./books.json", function(){
			done();
		});
	});

	it("should search for a term and return documents it blongs to", function(done){
		expect(index.searchIndex("Alice")).toEqual([0]);
		expect(index.searchIndex("An unusual alliance of man")).toEqual([0,1]);
		expect(index.searchIndex("Alice is unusual")).toEqual([0, 1]);
		expect(index.searchIndex("An unusual alliance of man with a rabbit")).toEqual([0,1]);
		expect(index.searchIndex(["Alice", "alliance"])).toEqual([0,1]);
		expect(index.searchIndex(["alliance"])).toEqual([1]);
		done();
	});
});
