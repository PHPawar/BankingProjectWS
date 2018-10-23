var dropdown = require('../util/select-wrapper.js');
var openAccount = function() {
	this.openAccountButton = element(by
			.xpath("//button[@class='btn btn-lg tab'][contains(text(),'Open Account')]"));
	this.selectCustomer = element(by.xpath("//select[@ng-model='custId']"));
	this.selectCurrency = element(by.xpath("//select[@ng-model='currency']"));
	this.process = element(by.xpath("//button[@type='submit']"));

	this.openCustomerAccount = function() {
		this.openAccountButton.click();
		return this;
	};

	this.selectCustomerAndCurrency = function(cust, currency) {
		var selectCust = new dropdown(by.id("userSelect"));
		selectCust.selectByText(cust);
		var selectCurr = new dropdown(by.id("currency"));
		selectCurr.selectByText(currency);
		return this;
	};
	this.createAccount = function() {
		this.process.click();
		return this;
	};
};
module.exports = new openAccount();