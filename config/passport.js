const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

// Load User Model
const User = require('../models/User');

module.exports = function(passport) {
  passport.use(new LocalStrategy({
    usernameField: 'email'
  }, (email, password, done) => {
    User.findOne({email: email})
      .then(user => {
        if (!user) {
          return done(null, false, {message: 'That email is not registered with us.'});
        }

        //Match password
        bcrypt.compare(password, user.password, (err, isMatch) => {
          if (err) {
            console.log('done first block, error');
            return done(err);
          }
          if (isMatch) {
            console.log('done 2nd block, isMatch');
            return done(null, user);
          } else {
            console.log('done 3rd, no match');
            return done(null, false, {message: 'Password is incorrect'})
          }
        })
      })
      .catch(err => done(err))
  }
  ))
    passport.serializeUser((user, done) => {
      done(null, user.id)
    })
  
    passport.deserializeUser((id, done) => {
      User.findById(id, (err, user) => {
        done(err, user)
      })
    })
}