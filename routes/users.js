const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

const ValidateRegisterInput = require('../validation/register');
const ValidateLoginInput = require('../validation/login');

const User = require('../models/User');

router.post('/login', (req, res, next) => {
  const { errors, isValid } = ValidateLoginInput(req.body);

  if (!isValid) {
    console.log(errors);
    res.render('login', {errors})
  } else {
    passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/login',
      successFlash: 'You are now logged in',
      failureFlash: 'Invalid username or password'
    })(req, res, next);
  }

})

router.post('/register', (req, res) => {

  const { errors, isValid } = ValidateRegisterInput(req.body);
  if (!isValid) {
    console.log(errors);
    res.render('register', {errors})
  }
  const { fullName, email, password } = req.body;
  
  User.findOne({email: email})
    .then(user => {
      if (user) {
        console.log('user was found');
        console.log(user);
        res.render('register')
      } else {
        const newUser = new User({
          fullName,
          email,
          password
        })

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(password, salt, (err, hash) => {
            if (err) {
              console.log(err);
              return res.status(400);
            } 

            newUser.password = hash;
            newUser.save()
              .then(user => {
                console.log(user)
                //might need to change where it redirects to
                return res.redirect('/login')
              })
          })
        })
      }
    })
})

module.exports = router;