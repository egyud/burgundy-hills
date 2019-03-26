const express = require('express');

const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');

const db = require('./config/keys').mongoURI;

const homeRoutes = require('./routes/home');
const userRoutes = require('./routes/users');

// Passport config
require('./config/passport')(passport);

const app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(homeRoutes);

app.use('/api/users', userRoutes);

mongoose.connect(db, {useNewUrlParser: true})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

app.use((req, res, next) => {
    res.status(404).render('404page');
});

app.listen(5000);