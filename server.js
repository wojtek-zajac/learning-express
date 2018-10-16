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
    const reqQuery = req.query
    const usersBy = getUsersBy(reqQuery)

    res.status(200)
        .render('users', {
            title: 'Users', 
            listTitle: 'Users', 
            users: getUsers(),
            reqQuery,
            usersBy
        })
})

app.get('/users/:id', (req, res) => {
    const user = getUserById(req.params.id)
    res.status(200).render('users', {title: user.name, users: getUsers(), user})
})

const server = app.listen(8080, () => {
    console.log(`App is running on port ${server.address().port}`)
})
