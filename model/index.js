const mongoose = require('mongoose');
const { 
  transactionSchema, 
  userSchema,
  categorySchema
} = require('./schemas');

const Transaction = mongoose.model('transaction', transactionSchema);
const User = mongoose.model('user', userSchema);
const Category = mongoose.model('category', categorySchema);

module.exports = { Transaction, User, Category };
