const path = require('path');

const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.render('index');
});

router.get('/login', (req, res, next) => {
    res.render('login');
});

router.get('/register', (req, res) => {
    res.render('register')
});

router.get('/contactus', (req, res) => {
    res.render('contact');
});

router.get('/vinyard', (req, res) => {
    res.render('vinyard');
});

router.get('/ivyview', (req, res) => {
    res.render('ivyview');
});

router.get('/vintage', (req, res) => {
    res.render('vintage');
});

router.get('/gallery', (req, res) => {
    res.render('gallery');
});

router.get('/amenities', (req, res) => {
    res.render('amenities');
});

router.get('/residentPortal', (req, res) => {
    res.render('resPortal');
});

router.get('/maintRequest', (req, res) => {
    res.render('maintReq');
});

module.exports = router;