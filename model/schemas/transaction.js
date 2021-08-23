const { Schema, SchemaTypes } = require('mongoose');

const transactionSchema = new Schema({
  date: {
    type: String,
    required: [true, 'Date is required'],
  },
  transactionType: {
    type: Number,
    enum: ["debit", "credit"],
    required: [true, 'TransactionType is required']
  },
  comment: {
    type: String,
    default: null,
  },
  amount: {
    type: Number,
    required: [true, 'Amount is required'],
  },
  userId: {
    type: SchemaTypes.ObjectId,
    ref: 'transaction',
  },
  categoryId: {
    type: SchemaTypes.ObjectId,
    ref: 'category',
  },
});

module.exports = transactionSchema;
