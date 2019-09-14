
const express = require('express'),

const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));
// app.use(express.static(__dirname));


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

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function(){
    console.log('Server listening on port', app.get('port'));
});