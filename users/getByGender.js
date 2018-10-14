const users = require('./users')

module.exports = query => users.data
    .filter(user => user.gender.toString() === query)
