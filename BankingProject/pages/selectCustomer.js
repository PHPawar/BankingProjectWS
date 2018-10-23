
var selectCustomer = function(){
	this.customerSelect = element(by.xpath("//select[@id='userSelect']"));
	this.login = element(by.xpath("//button[.='Login']"));
	this.validateCust = element(by.xpath("//span[@class='fontBig ng-binding']"));
	
	this.custSelect = function(name){
		this.selectName = element(by.xpath("//select[@id='userSelect']/option[text()='"+name+"']")).click();
		return this;		
	};
	this.loginAsCustomer = function(){
		this.login.click();
		return this;
	};

};
module.exports = new selectCustomer();