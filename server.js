const express = require('express')
const app = express()

const getUserById = require('./users/getById')
const getUsers = require('./users/get')

app.set('views', './views')
app.set('view engine', 'pug')

app.use('/public', express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.render('index', {title: 'Best website ever', message: 'Welcome!'})
})

app.get('/users', (req, res) => {
    res.status(200).render('users', {title: 'Users', users: getUsers(), user: getUserById(req.params.id)})
})

app.get('/users/:id', (req, res) => {
    const user = getUserById(req.params.id)
    res.status(200).render('users', {title: user.name, users: getUsers(), user})
})

const server = app.listen(8080, () => {
    console.log(`App is running on port ${server.address().port}`)
})
