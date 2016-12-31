var mongoose = require('../dbconfig');
//var bcrypt = require('bcrypt-nodejs');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');

var Schema = mongoose.Schema;
var userSchema = Schema({
  _id: Schema.ObjectId,
  email: {
    type: String,
    unique: true,
    required: true
  },
  username: {
        type: String,
        unique: true,
        required: true
    },
  password: {
        type: String,
        required: true
    },
  isVerified: {
      type: Boolean,
      default: false
  },
  hash: String,
  salt: String

});

userSchema.methods.setPassword = function(password){
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
};

userSchema.methods.validPassword = function(password) {
  var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
  return this.hash === hash;
};

userSchema.methods.generateJwt = function() {
  var expiry = new Date();
  //expiry.setDate(expiry.getDate() + 1);
  console.log('expiry.toDateString()=' + expiry.toString());
  expiry.setMinutes(expiry.getMinutes() + 10); console.log('expiry.getMinutes() + 10='+expiry.toString());
  //expiry.setTime(expiry.getTime() + 100); console.log('expiry.getTime() + 100='+expiry.toString());
  console.log(' exp=' +parseInt(expiry.getTime() / 1000));
  return jwt.sign({
    _id: this._id,
    email: this.email,
    username: this.username,
    exp: parseInt(expiry.getTime() / 1000),
  }, "MY_SECRET"); // DO NOT KEEP YOUR SECRET IN THE CODE!
};

module.exports = mongoose.model('users', userSchema);
