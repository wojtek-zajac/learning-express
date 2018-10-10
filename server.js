const express = require('express')
const app = express()
const users = [
    {
        id: 1,
        name: 'Wojtek'
    },
    {
        id: 2,
        name: 'Edek'
    }
]

app.set('views', './views')

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index', {title: 'Best website ever', message: 'Welcome!'})
})

app.get('/users', (req, res) => {
    res.status(200).json({users})
})

app.get('/users/:id', (req, res) => {
    const user = users.filter(user => {
        return user.id.toString() === req.params.id
    })
    res.status(200).json(user)
    
})

const server = app.listen(8080, () => {
    console.log(`App is running on port ${server.address().port}`)
})

// 1. GET /users - JSON object with data
// 2. GET /users/:id - JSON object for given user id
// 3. Serve HTML (pug)
