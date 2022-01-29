const { Sequelize } = require('sequelize')
const config = require('config')
const username = config.get('username')
const password = config.get('password')
const host = config.get('host')
const database = config.get('database')

const connectSequelize = async () => {
  console.log('Connecting to PostGRES SQLIZE')
  try {
    const pg_url = `postgres://${username}:${password}@${host}/${database}`
    const sequelize = new Sequelize(pg_url)
    await sequelize.authenticate()
    return sequelize    
  } catch (e) {
    console.error(e.message)
    process.exit(1)
  }
}


module.exports = {
  connectSequelize
}
