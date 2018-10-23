var openAcct = require('../pages/openAccount.js');
var addCust = require('../pages/addCustomer.js');
var logger = require('../util/log.js');
var commFun = require('../util/commonFunctions.js');

describe("OPening customer account", function() {
	it("Open Customer Account", function(){
		openAcct.openCustomerAccount();
		openAcct.selectCustomerAndCurrency("Prashant Pawar", "Rupee");
		browser.sleep(3000);
		openAcct.createAccount();
		closeAlert();
		logger.log('info', 'Open Customer Account');
	});
});