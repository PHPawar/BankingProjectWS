var nodemailer = require("nodemailer");
var fs = require('fs');
var path = require('path');

/*var transport = nodemailer.createTransport({

	service: 'Gmail',
    auth: {
        user: "mayur.balekundri@gmail.com",
        pass: "saibaba1"
    }
});*/

var transport = { service: 'SendGrid', auth: { user: 'mayur.balekundri@gmail.com', pass: 'saibaba1' } }
var transporter = nodemailer.createTransport('SMTP', transport);
//console.log("SMTP Configured");

var mailOptions = {
    from: 'mayur.balekundri@gmail.com', // sender address
    to: 'pprashanth.qa@gmail.com', // list of receivers
    subject: 'Report for Test Result', // Subject line
	//text: info.body,
    text: 'Contains the test result for the smoke test in html file', // plaintext body
    attachments: [
        {
            
            'path': 'D:\URL.txt',
			
        }]
};
transport.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
		response.send(err);
    } else {
        console.log("Message sent: " + info.response);
		response.send(info);
    }

});