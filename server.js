const express = require('express')
const app = express()
const getUserById = require('./users/getById')
const getUsers = require('./users/get')

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index', {title: 'Best website ever', message: 'Welcome!'})
})

app.get('/users', (req, res) => {
    res.status(200).render('users', {title: 'All users', users: getUsers()})
})

app.get('/users/:id', (req, res) => {
    res.status(200).render('user', {name: 'User Name',  users: getUsers(), user: getUserById(req.params.id)})
})

const server = app.listen(8080, () => {
    console.log(`App is running on port ${server.address().port}`)
})
