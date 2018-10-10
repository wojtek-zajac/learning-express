const users = require('./users')

module.exports = id => users.data
    .filter(user => user.id.toString() === id)[0]