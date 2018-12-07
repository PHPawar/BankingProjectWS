var addCust = require('../pages/addCustomer.js');
var homePage = require('../pages/homePage.js');
var logger = require('../util/log.js');
var commFun = require('../util/commonFunctions.js');
var using = require('jasmine-data-provider');
var testdata = require('../TestData/userdetails.js');

describe("Adding customer information", function() {
	using(testdata.custdata, function(data) 
   {
	it("Adding customer", function(){
		addCust.gotoAddCustomer();
		addCust.addCustomerInfo(data.FirstName, data.LastName, data.PostCode);
		addCust.submitinfo();
		browser.switchTo().alert().getText().then(function(text){
			var alertText= text;
			expect(alertText).toContain("Customer added successfully with customer id");
		});	
	
		closeAlert();
		logger.log('info', 'Adding customer');
		
	});
					
	});
	
});