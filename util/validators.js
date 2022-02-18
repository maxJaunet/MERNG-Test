/* This file contains the following: 
    --> validateRegisterInput   => check if each field is not empty and is valid
    --> validateLoginInput      => check if each field isn't empty
*/

export const validateRegisterInput = (
  username,
  email,
  password,
  confirmPassword
) => {
  const errors = {};
  // check if username is not empty
  if (username.trim() === '') {
    errors.username = 'Username must not be empty'
  }

  // check if email is not empty and is valid
  if (email.trim() === '') {
    errors.email = 'Email field must not be empty'
  }
  else {
    const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!email.match(regEx)) {
      errors.email = 'Email must be a valid email address'
    }
  }

  // check if password is not empty and if confirmPassword = password 
  if (password === '') {
    errors.password = 'Password must not be empty'
  }
  else if (password !== confirmPassword) {
    errors.confirmPassword = 'Passsword does not match'
  }
  
  // errors object passed, valid: Boolean
  return {
    errors,
    valid: Object.keys(errors).length < 1
  }
};

export const validateLoginInput = (username, password) => {
  const errors = {};
  // check if username is not empty
  if (username.trim() === '') {
    errors.username = 'Username must not be empty'
  }
  // check if password is not empty
  if (password.trim() === '') {
    errors.password = 'Password must not be empty'
  }
// errors object passed, valid: Boolean
  return {
    errors,
    valid: Object.keys(errors).length < 1
  }
}