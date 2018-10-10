const express = require('express')
const app = express()


app.get('/', (req, res) => {
    res.send('Hello world')
})

const server = app.listen(8080, () => {
    console.log(`App is running on port ${server.address().port}`)
})