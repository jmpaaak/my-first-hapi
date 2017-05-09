const Joi = require('joi');

function User(args) {
  if (args.email) this.email = args.email;
  else throw {msg:"email can not be undefined."};
  if (args.password) this.password = args.password;
  else throw {msg:"password can not be undefined."};
  if (args.firstName) this.firstName = args.firstName;
  else throw {msg:"firstName can not be undefined."};
  if (args.lastName) this.lastName = args.lastName;
  else throw {msg:"lastName can not be undefined."};
}

User.prototype.getEmail = function() {
  return this.email;
};

User.prototype.getPassword = function() {
  return this.password;
};

User.prototype.getFirstName = function() {
  return this.firstName;
};

User.prototype.getLastName = function() {
  return this.lastName;
};

User.validationScheme = {
  name: Joi.string().min(3).max(16)
};

try {
  var myUser = new User({
    email: "abc@gmail.com",
    password: "qwert1234",
    firstName: "John",
    lastName: "Black"
  });
} catch(exception) {
  console.log(exception);
}

module.exports = User;
