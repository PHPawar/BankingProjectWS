var customerSearch = function(){
	this.customerClick = element(by.xpath("//button[@ng-class='btnClass3'][contains(text(),'Customers')]"));
	this.sCustomer = element(by.xpath("//input[@placeholder='Search Customer']"));
	this.deleteCustomer = element(by.xpath("//button[@ng-click='deleteCust(cust)']"));
	
	this.navigateToCustomer = function(){
		this.customerClick.click();
		//return this;
	};
	
	this.searchCustomer = function(customer){
		this.sCustomer.sendKeys(customer);
		return this;
	};
	
	this.custDelete = function(){
		this.deleteCustomer.click();
	};
		
};
module.exports = new customerSearch();