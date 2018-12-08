var bankapp = require('../json/OR.json');
var homePage = require('../pages/homePage.js');
var logger = require('../util/log.js');

describe("Login as Customer", function(){
	it("Customer Login Test", function(){
		browser.get(bankapp.testurl);
		expect(browser.getTitle()).toEqual("Protractor practice website - Banking App");
		homePage.loginAsCustomer();
		browser.sleep(3000);
		logger.log('info', 'Login as customer');
		
						
	});
	it("Search for the customer", function() {
		custSearch.navigateToCustomer();
		custSearch.searchCustomer("Harry Potter");
		custSearch.custDelete();
		logger.log('info', 'Customer is deleted');
		
		});
		
});