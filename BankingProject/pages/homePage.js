var homePage = function(){
	// web elements
	this.customerLogin = element(by.xpath("//button[@class='btn btn-primary btn-lg'][text()='Customer Login']"));
	this.managarLogin = element(by.xpath("//button[@class='btn btn-primary btn-lg'][text()='Bank Manager Login']"));
	this.home = element(by.xpath("//button[@class='btn home'][text()='Home']"));
	this.labels=element.all(by.xpath("//div[@class='center']/button"));
	// methods in home page
	this.loginAsCustomer = function(){
		this.customerLogin.click();
		return this;	
	};
	
	this.loginAsManager = function(){
		this.managarLogin.click();
			
		return this;
	};
	

	this.goBack = function(){
		this.home.click();
		return this;
	};
	
	
};
module.exports = new homePage();