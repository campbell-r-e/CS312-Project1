const express = require('express'); 
const bodyParser = require('body-parser');
const app = express();

const Routes = require('./routes/route.js'); 
const error = require(`/Users/admin/Documents/CS 312/feb6/controllers/error.js`)

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false })); 

app.use('/', Routes); 

app.use(error.get404);

app.listen(3000, function() {
    console.log("Connected on port: 3000");
});
