const express = require('express')
const app = express()

const getUsers = require('./users/get')
const getUserById = require('./users/getById')
const getActiveUsers = require('./users/getActive')
const getUsersByAge = require('./users/getByAge')

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

app.get('/users/filter/active', (req, res) => {
    const activeUsers = getActiveUsers(req.query.active)
    const user = getUserById(req.params.id)
    res.status(200).render('users', {title: 'Active Users', users: activeUsers, user})
})

app.get('/users/filter/age', (req, res) => {
    const usersByAge = getUsersByAge(req.query.age)
    const user = getUserById(req.params.id)
    res.status(200).render('users', {title: 'Juvenile Users', users: usersByAge, user})
})

const server = app.listen(8080, () => {
    console.log(`App is running on port ${server.address().port}`)
})

// 1. Zdjecie obok name,phone, desc i about ponizej
// 2. Filter by isActive, gender and older than 30 (3 przyciski)
// nad lista wyswietl jaki aktualnie filtr jest aktywny
