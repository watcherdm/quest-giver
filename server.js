const express = require('express')
const bodyParser = require('body-parser')
const { connectSequelize } = require('./config/db')
const setupAdventureRoute = require('./routes/api/adventures')
const path = require('path')
const cors = require('cors')
const Record = require('./models/Record')
const app = express()

const bootstrap = async () => {
  const sqlizr = await connectSequelize()
  const models = new Record({sqlizr})

  app.use(express.static(path.join(__dirname, 'build'))) 
  app.use(bodyParser.json({ extended: false }));
  app.use(cors({ origin: true, credentials: true }))
  app.use('/api/adventures', setupAdventureRoute(models))
  app.get('/', (req, res) => { res.send('Hello World!') })

  const port = process.env.PORT || 8082

  app.listen(port, () => { console.log(`Server listening on port ${port}`) })
}

bootstrap()