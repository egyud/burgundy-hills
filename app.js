const express = require('express');

const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');


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

app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: false
}))

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());


app.use(homeRoutes);

app.use('/api/users', userRoutes);

mongoose.connect(db, {useNewUrlParser: true})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

app.use((req, res, next) => {
    res.status(404).render('404page', {path: '', pageTitle: '404 Page Not Found'});
});

app.listen(5000, () => console.log('Server started on port 5000'));