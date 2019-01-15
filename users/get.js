const users = require('./users')

module.exports = {
    getUsers,
    getUsersBy
}

function getUsers(){
    return users.data
}

function getUsersBy(query) {
    // query = {
    //     age: 30
    // }
    return users.data.filter(user => user['age'].toString() === 30)
}
