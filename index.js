var express = require('express');
var app = express();

/*Body parser */
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

require('./app/routers/home.router')(app);
require('./app/routers/dulieutron.router')(app);

app.listen(3000, function(){
    console.log("Server is 3000");
})