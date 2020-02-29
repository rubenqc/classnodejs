'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
  firstName: {
    type: String,
    required: [true, 'Falta el nombre.']
  },
  lastName: {
    type: String,
    required: [true, 'Falta el apellido.']
  },
  username: {
    type: String,
    required: [true, 'Falta el username.']
  },
  email: {
    type: String
  },
  passwd: {
    type: String,
    required: [true, 'Falta el passwd']
  },
  scopes: {
    type: [String],
    default: []
  }
})

module.exports = User