const express = require('express')
const bodyParser = require('body-parser')
const connectDB = require('./config/db')
const adventures = require('./routes/api/adventures')
const path = require('path')
const cors = require('cors')

const app = express()

connectDB()

app.use(express.static(path.join(__dirname, 'build')))
app.use(bodyParser.json({ extended: false }));
app.use(cors({ origin: true, credentials: true }))
app.use('/api/adventures', adventures)
app.get('/', (req, res) => { res.send('Hello World!') })

const port = process.env.PORT || 8082

app.listen(port, () => { console.log(`Server listening on port ${port}`) })