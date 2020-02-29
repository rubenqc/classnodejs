'use strict'

// config
const { config } = require('../config')

// setup libs
const setupDB = require('./lib/db')
const setupUser = require('./lib/user')

// models
const UserModel = require('./model/user')

module.exports = async function(configDB = config){
  await setupDB(configDB)
  
  const User = setupUser(UserModel)

  return {
    User
  }
}