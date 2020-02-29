'use strict'

const Mongoose = require('mongoose')

let mongoose = null

// singleton db
module.exports = async function setupDatabase(config){
  const {
    dev,
    dbUser,
    dbPassword,
    dbHost,
    dbPort,
    dbName
  } = config

  if(!mongoose){
    mongoose = await Mongoose.connect(`mongodb://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`, { useNewUrlParser: true, useCreateIndex: true})
    mongoose.set('debug', dev)
    mongoose.set('useFindAndModify', false)
  }
}