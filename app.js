const express = require('express');

const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const db = require('./config/keys').mongoURI;

const userRoutes = require('./routes/user');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(userRoutes);

mongoose.connect(db, {useNewUrlParser: true})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

app.use((req, res, next) => {
    res.status(404).render('404page');
});

app.listen(3000);