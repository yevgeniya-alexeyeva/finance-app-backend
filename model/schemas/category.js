const { Schema } = require('mongoose');

const categorySchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
});

module.exports = categorySchema;
