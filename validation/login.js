const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = ValidateLoginInput = (data) => {
  let errors = [];

  // Convert empty fields to strings
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (Validator.isEmpty(data.email)) {
    errors.push('Email is required');
  }

  if (Validator.isEmpty(data.password)) {
    errors.push("Password is required")
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}