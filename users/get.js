const users = require('./users')

module.exports = {
    getUsers,
    getUsersBy
}

function getUsers(){
    return users.data
}

function getUsersBy(query) {
    if(query.active) {
        return users.data.filter(user => user.isActive.toString() === query.active)
    } else if (query.age) {
        return users.data.filter(user => user.age.toString() > query.age)
    } else if (query.gender) {
        return users.data.filter(user => user.gender.toString() === query.gender)
    }
}
