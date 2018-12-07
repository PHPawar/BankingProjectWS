describe("Testing demo",function(){
	beforeEach(function(){
		console.log("Prashant to be run every time")
	});
	afterEach(function(){
		console.log("Prashant to be run every time after test cases")
	});
	
	beforeAll(function(){
		console.log("only one time before all test cases")
	});
	afterAll(function(){
		console.log("only one time After all test cases")
	});
	
	it("test case 1", function(){
		console.log("Test case 1 is pass")
		
	});
	it("test case 2", function(){
		console.log("Test case 2 is pass")
		
	});
	it("test case 3", function(){
		console.log("Test case 3 is pass")
		
	});
	
} );