const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index');
});

router.get('/login', (req, res, next) => {
    res.render('login');
});

router.get('/contactus', (req, res, next) => {
    res.render('contact');
});

router.get('/gallery', (req, res, next) => {
    res.render('gallery');
});

module.exports = router;