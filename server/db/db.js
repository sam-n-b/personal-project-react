const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

function listUsers (db = connection) {
    return db('userList').select('userList.name', 'userList.id')
}



module.exports = {
    listUsers
  }