const express = require('express')
const app = express()
const getUserById = require('./users/getById')
const getUsers = require('./users/getUsers')
const usersJson = require('./users/users')

app.set('views', './views')

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index', {title: 'Best website ever', message: 'Welcome!'})
})

app.get('/api/users', (req, res) => {
    res.status(200).json(getUsers())
})

app.get('/users', (req, res) => {
    res.status(200).render('users', {title: 'All users', usersJson})
})

app.get('/api/users/:id', (req, res) => {
    res.status(200).json(getUserById(req.params.id))
})

const server = app.listen(8080, () => {
    console.log(`App is running on port ${server.address().port}`)
})

// GET /users - funkcja get w folderze users zwracająca wszystkich userów
// dopisz endpoint GET /users - HTML zawierający listę userów (iteracja w pugu)
