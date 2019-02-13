const environment = process.env.NODE_ENV || 'development'
const config = require('../../knexfile')[environment]
const connection = require('knex')(config)

function listUsers (db = connection) {
    return db('userList').select('userList.name', 'userList.id')
}

function listMovies (db= connection) {
    return db('movies').select()
}

function listMovieById (id, db = connection){
    return db('movies').where('movieId', id).select()
}
module.exports = {
    listUsers,
    listMovies,
    listMovieById
  }