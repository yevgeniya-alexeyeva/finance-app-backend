const { Schema } = require('mongoose');
const bcrypt = require('bcryptjs');
const Joi = require('joi');
const userSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
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
    verifyToken: {
      type: String,
      required: [true, 'Verify token is required'],
    },
  },
  { versionKey: false, timestamps: true }
);
userSchema.methods.setPassword = function (password) {
  this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};
userSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};
const validateUser = (newUser) => {
  const addUserSchema = Joi.object({
    password: Joi.string().min(6).required(),
    email: Joi.string().email().required(),
    name: Joi.string(),
  });
  const { error } = addUserSchema.validate(newUser);
  return error;
};
module.exports = { userSchema, validateUser };
