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

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.get('/users', (req, res) => {
    res.status(200).json(data)
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
