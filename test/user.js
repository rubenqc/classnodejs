'use strict'

const db = require('../db')

async function main(){
  const services = await db()
  console.log('-- Services --')
  console.log(services)
  process.exit(0)
}

main()