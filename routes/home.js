const path = require('path');

const express = require('express');

const router = express.Router();

const isLoggedIn = (req, res, next) => {
    if (req.user) {
        next();
    } else {
        res.redirect('/login');
    }
}

router.get('/', (req, res, next) => {
    res.render('index', {
        pageTitle: 'Burgundy Hills Apartments',
        path: ''
    });
});

router.get('/login', (req, res, next) => {
    if (!req.user) {
        res.render('login', {
            pageTitle: 'Resident Portal',
            path: '/login'
        });
    } else {
        res.redirect('/residentPortal');
    }
});

router.get('/register', (req, res) => {
    res.render('register', {
        pageTitle: 'Create An Account'
    })
});

router.get('/contactus', (req, res) => {
    res.render('contact', {
        pageTitle: 'Contact Us',
        path: '/contactus'
    });
});

router.get('/vinyard', (req, res) => {
    res.render('vinyard', {
        pageTitle: 'Floorplans: The Vineyard',
        path: '/floorplans'
    });
});

router.get('/ivyview', (req, res) => {
    res.render('ivyview', {
        pageTitle: 'Floorplans: The Ivyview',
        path: '/floorplans'
    });
});

router.get('/vintage', (req, res) => {
    res.render('vintage', {
        pageTitle: 'Floorplans: The Vintage',
        path: '/floorplans'
    });
});

router.get('/gallery', (req, res) => {
    res.render('gallery', {
        pageTitle: 'Photo Gallery',
        path: '/gallery'
    });
});

router.get('/amenities', (req, res) => {
    res.render('amenities', {
        pageTitle: 'Amenities',
        path: '/amenities'
    });
});

router.get('/residentPortal', isLoggedIn, (req, res) => {
    res.render('resPortal', {
        pageTitle: 'Resident Portal',
        path: '/residentPortal'
    });
});

router.get('/maintRequest', (req, res) => {
    res.render('maintReq', {
        pageTitle: 'Maintenance Request',
        path: ''
    });
});

module.exports = router;