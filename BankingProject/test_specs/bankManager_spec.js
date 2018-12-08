var bankapp = require('../json/OR.json');
var homePage = require('../pages/homePage.js');
var logger = require('../util/log.js');
var commFun = require('../util/commonFunctions.js');

describe("Login As a Bank Manager", function(){
	it("Naviagate to Bank Manager", function(){
		browser.get(bankapp.testurl);
		expect(browser.getTitle()).toEqual("Protractor practice website - Banking App");
		homePage.loginAsManager();
		logger.log('info', 'Login as Bank Manager');
				
	});
	
});