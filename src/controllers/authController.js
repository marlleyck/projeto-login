const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models/User')

const router = express.Router()

// Public Route - Home
router.get('/', (req, res) => {
    return res.send({ ok: true })
})

// Public Route - Register User
router.post('/auth/register', async (req, res) => {
    const { name, email, password, confirmPassword } = req.body

    // Validations
    if (!name) {
        return res.status(422).send({ error: 'Name is required!' })
    }

    if (!email) {
        return res.status(422).send({ error: 'Email is required!' })
    }

    if (!password) {
        return res.status(422).send({ error: 'Password is required!' })
    }

    if (password !== confirmPassword) {
        return res.status(422).send({ error: 'The passwords do not match!' })
    }

    // Check if user existis
    const userExists = await User.findOne({ email: email })

    if (userExists) {
        return res.status(400).send({ error: 'Email already exists!' })
    }

    // Create password
    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(password, salt)

    // Create user
    const user = new User({
        name,
        email,
        password: passwordHash
    })

    try {
        await user.save()

        res.status(201).send({ msg: 'User create success!' })
    } catch(e) {
        console.log(e)
        return res.status(500).send({ error: 'Server error!' })
    }
})

// Public Route - Login
router.post('/auth/user', async (req, res) => {
    const { email, password } = req.body

    // Validations
    if (!email) {
        return res.status(422).send({ error: 'Email is required!' })
    }

    if (!password) {
        return res.status(422).send({ error: 'Password is required!' })
    }

    // Check if user exists
    const user = await User.findOne({ email: email })

    if (!user) {
        return res.status(404).send({ error: 'User not found!' })
    }

    // Check if password match
    const checkPassword = await bcrypt.compare(password, user.password)

    if (!checkPassword) {
        return res.status(422).send({ error: 'Invalid password!' })
    }

    try {
        const secret = process.env.SECRET

        const token = jwt.sign({
            id: user._id
        }, secret)

        return res.status(200).send({ msg: 'Login success!', token })

    } catch(e) {
        console.log(e)
        return res.status(500).send({ error: 'Server error!' })
    }


})

// Private Route - Profile
router.get('/user/:id', checkToken, async (req, res) => {
    const id = req.params.id

    // Check if user exists
    const user = await User.findById(id, '-password')

    if (!user) {
        return res.status(404).send({ error: 'User not found!' })
    }

    return res.send(user)
})

function checkToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if (!token) {
        return res.status(401).send({ error: 'Access denied!' })
    }

    try {
        const secret = process.env.SECRET

        jwt.verify(token, secret)

        next()
    } catch(e) {
        return res.status(400).send({ error: 'Invalid token!' })
    }
}

module.exports = router