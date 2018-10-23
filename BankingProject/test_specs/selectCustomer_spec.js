var SelCust = require('../pages/selectCustomer.js');
var logger = require('../util/log.js');
describe("Select customer", function() {
	it("Select customer to login", function(){
		SelCust.custSelect("Harry Potter");
		SelCust.loginAsCustomer();
		expect(SelCust.validateCust.getText()).toBe("Harry Potter");
		logger.log('info', 'Validating customer');
	});
});
