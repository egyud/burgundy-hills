const express = require('express');

const path = require('path');
const bodyParser = require('body-parser');

const userRoutes = require('./routes/user');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(userRoutes);

app.use((req, res, next) => {
    res.status(404).render('404page');
});

app.listen(3000);