describe("automation of non angular application", function(){
	it("automating of non angular applcation", function(){
		browser.ignoreSynchronization = true;
		/*browser.get("http://www.ksrtc.in/oprs-web/guest/home.do?h=1");
		browser.sleep(3000);
		element(by.xpath("//input[@name='fromPlaceName']")).sendKeys("HUBLI");
		element(by.xpath("//input[@name='toPlaceName']")).sendKeys("PUNE");*/
		browser.get("https://google.com")
		element(by.name('q')).isDisplayed().then(function(displayFlag){
			console.log("Displayed flag is : "+displayFlag);
		})
	});
	
	
});