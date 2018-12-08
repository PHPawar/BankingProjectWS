var homePage = require('../pages/homePage.js');
var logger = require('../util/log.js');
var custSearch = require('../pages/customerSearch.js');

describe("Search for the customer", function() {
	it("Search for the customer", function() {
	custSearch.navigateToCustomer();
	custSearch.searchCustomer("Harry Potter");
	custSearch.custDelete();
	logger.log('info', 'Customer is deleted');
	
	});
});