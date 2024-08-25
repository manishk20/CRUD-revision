const mongoose = require("mongoose");

const crudSchema = new mongoose.Schema({
  Sno: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const crud = mongoose.model('crud', crudSchema);

module.exports = crud;
