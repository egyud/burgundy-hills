const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

const User = require('../models/User');

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    successFlash: 'You are now logged in',
    failureFlash: 'Invalid username or password'
  })(req, res, next);
})

router.post('/register', (req, res) => {
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