const express = require('express'),
      sgMail  = require('@sendgrid/mail');

const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
// app.use(express.static(__dirname));

sgMail.setApiKey('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'); 

app.get("/", function(req, res){
	res.render('index.ejs');
});

app.get("/services", function(req, res){
	res.render('services.ejs');
});

app.get("/products", function(req, res){
	res.render('products.ejs');
});

app.get("/aboutUs", function(req, res){
	res.render('aboutUs.ejs');
});

app.get("/appointment", function(req, res){
	var customer = req.query.customer;
    // console.log(customer);
    
	if(customer){
		const msgToCustomer = {
			to: 	 customer.email,
			from: 	 'tamanna_beauty_saloon@example.com',
			subject: 'Appointment Booking',
			text: 	 'Booking!',
			html: 	 'Dear ' + customer.name + ' ,' + 
				   	 '<br>'	+ 
					 'Booking Successful! We will get in touch with you soon.'
		};
		const msgToCompany = {
			to: 	 'v.anushka786@gmail.com',
			from: 	 'tamanna_beauty_saloon@example.com',
			subject: 'New appointment!',
			text: 	 'Booking!',
			html: 	 '<h1>Appointment Booked!</h1>' +
					 '<br>' +
					 '<h2>Customer Details</h2>' +
					 '<br>' +
					 '<b>Customer Name: ' + customer.name +
					 '<br>' +
					 '<b>Customer Email: ' + customer.email +
					 '<br>' +
					 '<b>Contact Number: ' + customer.Number +
					 '<br>' +
					 '<b>Message: ' + customer.message
					 
		};
		sgMail.send(msgToCustomer);
		sgMail.send(msgToCompany);		
	}
	res.render('appointment.ejs');
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function(){
    console.log('Server listening on port', app.get('port'));
});