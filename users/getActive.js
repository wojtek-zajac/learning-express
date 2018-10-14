const users = require('./users')

module.exports = query => users.data
    .filter(user => user.isActive.toString() === query)
