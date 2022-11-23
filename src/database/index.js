require('dotenv').config()

const mongoose = require('mongoose')
const express = require('express')

// Credentials
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

// Connection to Mongoose
mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@cluster0.eo5ospt.mongodb.net/?retryWrites=true&w=majority`)
.then(() => {
    console.log('Connection on database success!')
})
.catch((err) => console.log(err))

module.exports = mongoose