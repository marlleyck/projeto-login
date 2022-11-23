const express = require('express')

const authController = require('./controllers/authController')

const app = express()

// Configs Express
app.use(express.json())
app.use(authController)

app.listen(3000, () => console.log('Server is running...'))
