const { Schema } = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, 'Email is required'],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please provide a valid email address',
    ],
  },
  password: {
    type: String,
    minlength: [6, 'Must be longer than 6'],
    maxlength: [30, 'Must be shorter than 30'],
    required: [true, 'Password is required'],
  },
  name: {
    type: String,
    minlength: [2, 'Must be longer than 2'],
    maxlength: [30, 'Must be shorter than 30'],
    required: [true, 'Name is required'],
  },
  balance: {
    type: Number,
    default: 0,
  },
  token: {
    type: String,
    default: null,
  },
  verify: {
    type: Boolean,
    default: false,
  },
  verificationToken: {
    type: String,
    required: [true, 'verification Token is required'],
  },
});

userSchema.methods.setPassword = function (password) {
  this.password = bcrypt.hashSync(password, 10);
}

userSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
}

module.exports = userSchema;
