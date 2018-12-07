var excel = require('excelj');
var wb = new excel.workbook();
wb.xlsx.readFile("./test.xlsx").then(function(){
	let sheet = wb.getWorksheet("Sheet1");
let Row = sheet.getRow(3);
let Cell = rowObject.getCell(2);
//print
console.log(cellObject.value);
});


