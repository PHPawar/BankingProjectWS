var webElementText;
var commonFunctions = function() {
	closeAlert = function() {
		browser.switchTo().alert().accept();
	};
	getElementText = function(WebEle){
		WebEle.getText().then(function(text)
		{
			webElementText=text;
		//console.log(webElementText);
		});

};
};

module.exports = new commonFunctions();