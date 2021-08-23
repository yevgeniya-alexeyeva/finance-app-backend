const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const { 
  transactionSchema, 
  userSchema,
  categorySchema
} = require('./schemas');

contactSchema.plugin(mongoosePaginate);

const Transaction = mongoose.model('transaction', transactionSchema);
const User = mongoose.model('user', userSchema);
const Category = mongoose.model('category', categorySchema);

module.exports = { Transaction, User, Category };
