var name = "Prashant";
var name1;

var function1 = function() {
	console.log("inside the function" + "       " + name);
	name = "pawar";

	function2 = function() {
		console.log("Function 2" + " " + name);
	}
	console.log("After change " + "  " + name);

}

function1();
console.log("Outside the function" + "       " + name);
function2();