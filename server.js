const express = require('express')
const app = express()

const {getUsers, getUsersBy} = require('./users/get')
const getUserById = require('./users/getById')

app.set('views', './views')
app.set('view engine', 'pug')

app.use('/public', express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.render('index', {title: 'Best website ever', message: 'Welcome!'})
})

app.get('/users', (req, res) => {
    const user = getUserById(req.params.id)
    const activity = req.query.active
    const age = req.query.age
    const gender = req.query.gender
    const usersBy = getUsersBy(activity, age, gender)

    if (activity || age || gender) {
        res.status(200).render('users', {title: 'Filter Users', listTitle: activity || age || gender, users: usersBy, user})
    } else {
        res.status(200).render('users', {title: 'All users', listTitle: 'All Users', users: getUsers(), user})
    }
})

app.get('/users/:id', (req, res) => {
    const user = getUserById(req.params.id)
    res.status(200).render('users', {title: user.name, users: getUsers(), user})
})

const server = app.listen(8080, () => {
    console.log(`App is running on port ${server.address().port}`)
})

