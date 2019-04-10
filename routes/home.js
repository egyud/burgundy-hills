const express = require('express');

const router = express.Router();

const navController = require('../controllers/nav');

// GET /
router.get('/', navController.getIndex);

// GET /login
router.get('/login', navController.getLogin);

// GET /logout
router.get('/logout', navController.getLogout);

// GET /register
router.get('/register', navController.getRegister);

// GET /contactus
router.get('/contactus', navController.getContact);

// GET /vineyard
router.get('/vineyard', navController.getVineyard);

// GET /ivyview
router.get('/ivyview', navController.getIvyview);

// GET /vintage
router.get('/vintage', navController.getVintage);

// GET /gallery
router.get('/gallery', navController.getGallery);

// GET /amenities
router.get('/amenities', navController.getAmenities);

// GET /residentPortal
router.get('/residentPortal', navController.isLoggedIn, navController.getResPortal);

// GET /maintRequest
router.get('/maintRequest', navController.getMaintenanceForm);

module.exports = router;