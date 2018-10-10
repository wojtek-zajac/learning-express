const express = require('express')
const app = express()
const data = {
    users: {
        1: {
            name: 'Wiktor'
        },
        2: {
            name: 'Wojtek'
        }
    }
}

app.set('views', './views')

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index', {title: 'Best website ever', message: 'Welcoome!'})
})

app.get('/users', (req, res) => {
    res.status(200).json(data)
})

app.get('/users/1', (req, res) => {
    res.status(200).json(data.users['1'].name)
})

app.get('/users/2', (req, res) => {
    res.status(200).json(data.users['2'].name)
})

app.get('/:random/:id', (req, res) => {
    res.send(`${req.params.random} ${req.params.id}`)
})

const server = app.listen(8080, () => {
    console.log(`App is running on port ${server.address().port}`)
})

// 1. GET /users - JSON object with data
// 2. GET /users/:id - JSON object for given user id
// 3. Serve HTML (pug)
