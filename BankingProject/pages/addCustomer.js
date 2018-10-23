var addCustomer = function() {
	this.addCust = element(by.xpath("//button[@ng-class='btnClass1'][contains(text(),'Add Customer')]"));
	this.firstName = element(by.xpath("//input[@ng-model='fName']"));
	this.lastName = element(by.xpath("//input[@ng-model='lName']"));
	this.postCode = element(by.xpath("//input[@ng-model='postCd']"));
	this.saveCustomer = element(by.xpath("//button[@type='submit'][text()='Add Customer']"));
	

	this.addCustomerInfo = function(FirstName, lastName, postCode) {
		this.firstName.sendKeys(FirstName);
		this.lastName.sendKeys(lastName);
		this.postCode.sendKeys(postCode);
		return this;
		
	};
	this.gotoAddCustomer = function() {
		this.addCust.click();
	};
	this.submitinfo = function() {
		this.saveCustomer.click();
		return this;
	};

};
module.exports = new addCustomer();
