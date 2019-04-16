exports.isLoggedIn = (req, res, next) => {
  if (req.user) {
      next();
  } else {
      res.redirect('/login');
  }
};

exports.getIndex = (req, res, next) => {
    res.render('index', {
        pageTitle: 'Burgundy Hills Apartments',
        path: ''
    });
};

exports.getLogin = (req, res, next) => {
    if (!req.user) {
        res.render('login', {
            pageTitle: 'Resident Portal',
            path: '/login'
        });
    } else {
        res.redirect('/residentPortal');
    }
};

exports.getLogout = (req, res) => {
    req.logout();
    res.redirect('/login');
}

exports.getRegister = (req, res) => {
    res.render('register', {
        pageTitle: 'Create An Account',
        path: '/register'
    })
};

exports.getContact = (req, res) => {
    res.render('contact', {
        pageTitle: 'Contact Us',
        path: '/contactus'
    });
};

exports.getVineyard = (req, res) => {
    res.render('vineyard', {
        pageTitle: 'Floorplans: The Vineyard',
        path: '/floorplans'
    });
};

exports.getIvyview = (req, res) => {
    res.render('ivyview', {
        pageTitle: 'Floorplans: The Ivyview',
        path: '/floorplans'
    });
};

exports.getVintage = (req, res) => {
    res.render('vintage', {
        pageTitle: 'Floorplans: The Vintage',
        path: '/floorplans'
    });
};

exports.getGallery = (req, res) => {
    res.render('gallery', {
        pageTitle: 'Photo Gallery',
        path: '/gallery'
    });
};

exports.getAmenities = (req, res) => {
    res.render('amenities', {
        pageTitle: 'Amenities',
        path: '/amenities'
    });
};

exports.getResPortal = (req, res) => {
    res.render('resPortal', {
        pageTitle: 'Resident Portal',
        path: '/residentPortal'
    });
};

exports.getMaintenanceForm = (req, res) => {
    res.render('maintReq', {
        pageTitle: 'Maintenance Request',
        path: ''
    });
};

exports.getUnderConstruction = (req, res) => {
    res.render('working', {
        path: '',
        pageTitle: 'Page Under Construction'
    })
}