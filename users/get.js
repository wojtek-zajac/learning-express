const users = require('./users')

module.exports = {
    getUsers,
    getUsersBy
}

function getUsers(){
    return users.data
}

function getUsersBy(active, age, gender) {
    if(active) {
        return users.data.filter(user => user.isActive.toString() === active)
    } else if (age) {
        return users.data.filter(user => user.age.toString() > age)
    } else if (gender) {
        return users.data.filter(user => user.gender.toString() === gender)
    }
}
