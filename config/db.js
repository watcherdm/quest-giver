const mongoose = require('mongoose')
const { Sequelize } = require('sequelize')
const config = require('config')
const db = config.get('mongoURI')
const {PGUSER, PGPASSWORD, PGHOST, PGPORT, PGDATABASE} = process.env


const connectSequelize = async () => {
  console.log('Connecting to PostGRES SQLIZE')
  try {
    const pg_url = `postgres://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}`
    const sequelize = new Sequelize(pg_url)
    await sequelize.authenticate()
    return sequelize    
  } catch (e) {
    console.error(e.message)
    process.exit(1)
  }
}

const connectMongoDB = async () => {
  try {
    await mongoose.connect(
      db,
      {
        useNewUrlParser: true
      }
    )
    console.log('MongoDB is Connected')
  } catch (e) {
    console.error(err.message)
    process.exit(1)
  }
}

module.exports = {
  connectMongoDB,
  connectSequelize
}
