const { Schema, SchemaTypes } = require('mongoose');

const transactionSchema = new Schema(
  {
    date: {
      year: {
        type: Number,
        required: [true, 'Year is required'],
      },
      month: {
        type: Number,
        min: [1, 'Must be at least 1, got {VALUE}'],
        max: [12, 'Must not be more than 12, got {VALUE}'],
        required: [true, 'Month is required'],
      },
      day: {
        type: Number,
        min: [1, 'Must be at least 1, got {VALUE}'],
        max: [31, 'Must not be more than 31, got {VALUE}'],
        required: [true, 'Day is required'],
      },
    },
    transactionType: {
      type: String,
      enum: {
        values: ['withdrawal', 'deposit'],
        message: '{VALUE} is not supported',
      },
      required: [true, 'TransactionType is required'],
    },
    comment: {
      type: String,
      default: null,
    },
    amount: {
      type: Number,
      min: [0, 'Must be more than 0, got {VALUE}'],
      required: [true, 'Amount is required'],
    },
    balance: {
      type: Number,
      required: true,
    },
    owner: {
      type: SchemaTypes.ObjectId,
      ref: 'user',
    },
    category: {
      type: SchemaTypes.ObjectId,
      ref: 'category',
    },
  },
  { versionKey: false, timestamps: true }
);

module.exports = transactionSchema;
