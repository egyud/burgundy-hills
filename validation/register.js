const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = ValidateRegisterInput = (data) => {
  let errors = [];
  
  // Convert any empty fields to strings
  data.fullName = !isEmpty(data.fullName) ? data.fullName : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  if (Validator.isEmpty(data.email)) {
    errors.push('Email address is required')
  } else if (!Validator.isEmail(data.email)) {
    errors.push('Please enter a valid email address')
  }

  if (Validator.isEmpty(data.fullName)) {
    errors.push('Your full name is required')
  }

  if (Validator.isEmpty(data.password)) {
    errors.push("Password is required")
  } else if (!Validator.isLength(data.password, {min: 6, max: 30})) {
    errors.push('Password must be at least 6 characters')
  } else if (!Validator.equals(data.password, data.password2)) {
    errors.push('Your passwords must match')
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}