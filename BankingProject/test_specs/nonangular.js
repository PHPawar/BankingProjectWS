describe("Testing non-anglar application", function(){
	it ("automating non-angular application", function(){
		browser.ignoreSynchronization=true;
		
		browser.get("https://www.spicejet.com/");
		element(by.xpath("//input[@id='ctl00_mainContent_ddl_originStation1_CTXT']")).sendKeys("PUNE");
		element(by.xpath("//input[@id='ctl00_mainContent_ddl_destinationStation1_CTXT']")).sendKeys("DELHI");
		element(by.xpath("//div[@class='ui-datepicker-title']/span[@class='ui-datepicker-month'][.='September']/parent::div/parent::div/following-sibling::table/tbody/tr[3]/td[4]")).click();
		//element(by.xpath("//input[@id='ctl00_mainContent_btn_FindFlights']/parent::span")).click();
		browser.actions().mouseMove("//input[@id='ctl00_mainContent_btn_FindFlights']/parent::span").click().perform();
		browser.sleep(10000);
/*	    element(by.xpath("//div[contains(text(), 'Choose A Departure')]")).getText().then(function(text){
	    	console.log(text);
	    });*/	
		/*element.all(by.xpath("//div[@class='dropdownDiv']/ul/li")).getText().then(function(text){
			console.log(text);
		});
		element.all(by.xpath("//div[@class='dropdownDiv']/ul/li[6]/a[@value='BLR'][1]")).getText().then(function(text1){
			console.log("6th element is "+text1);
		});*/
		
	});	
	
});