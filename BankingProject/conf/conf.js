exports.config = {

	directConnect : true,

	// Capabilities to be passed to the webdriver instance.
	capabilities : {
		browserName : 'chrome',

	},

	framework : 'jasmine2',

	specs: ['../test_specs/noangular1.js'],

	/*suites : {

		bankManagerLogin : [ '../test_specs/bankManager_spec.js' ],
		custSearch : [ '../test_specs/customerSearch_spec.js' ],
		customerLogin : [ '../test_specs/customerLogin_spec.js' ],
		addCustomer : [ '../test_specs/addCustomerInfo.js' ],
		openAccount : [ '../test_specs/openAccount_spec.js' ],
		addCustomerFlow : [ '../test_specs/bankManager_spec.js',
				'../test_specs/addCustomerInfo.js',
				'../test_specs/openAccount_spec.js',
				'../test_specs/customerSearch_spec.js'],
		selectCust : [ '../test_specs/selectCustomer_spec.js' ],
				

	},*/

	// Options to be passed to Jasmine.
	jasmineNodeOpts : {
		defaultTimeoutInterval : 300000
	},

	onPrepare : function() {
		browser.driver.manage().timeouts().implicitlyWait(100000);
		browser.manage().window().maximize();

		var AllureReporter = require('jasmine-allure-reporter');
		jasmine.getEnv().addReporter(new AllureReporter({
			allureReport : {
				resultsDir : 'allure-results'
			}
		}));
		jasmine.getEnv().afterEach(function(done) {
			browser.takeScreenshot().then(function(png) {
				allure.createAttachment('Screenshot', function() {
					return new Buffer(png, 'base64')
				}, 'image/png')();
				done();
			})
		});
		//goto  C:\Users\Prashant\BankingProjectWS\BankingProject\node_modules\jasmine-allure-reporter>
		//run -- mvn site -Dallure.results_pattern=allure-results

		/*jasmine
				.getEnv()
				.addReporter(
						new Jasmine2HtmlReporter(
								{
									savePath : 'C:\Users\Prashant\BankingProjectWS\BankingProject/EmailResult',
									takeScreenshots : true,
									takeScreenshotsOnlyOnFailures : false,
									fixedScreenshotName : true,
									//   fileNamePrefix: 'Prefix',
									consolidate : true,
									consolidateAll : true,
									cleanDestination : true,
									showPassed : true,
									fileNameDateSuffix : false,
									fileName : 'BankTestResult'

								}));
		 */
	},

/* onComplete:function () { 
  
  console.log("Sending Mail with reports for the test execution.");
  
  var sys = require('util') 
  
  var exec = require('child_process').exec; 
  
  function puts(error, stdout, stderr) {
sys.puts(stdout) } exec("node mail.js", puts);


},
 */

}