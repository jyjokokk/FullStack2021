const config = require('./utils/config')
const express = require('express')
const app = express()
const blogRouter = require('./controllers/blogs')
const cors = require('cors')
const mongoose = require('mongoose')

mongoose.connect(config.MONGODB_URL)

app.use(cors)
app.use(express.json())

app.use('/api/blogs', blogRouter)

module.exports = app
