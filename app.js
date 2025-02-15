const express = require('express'); 
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

const Routes = require('./routes/route.js'); 
const error = require(`./controllers/error.js`)

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/', Routes); 

app.use(error.get404);
mongoose.connect('mongodb://localhost:27017/projectone', { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000  
}).then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => console.log('Server running on port 3000'));
}).catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1); 
});