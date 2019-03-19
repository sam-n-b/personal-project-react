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

function showWatched (id, db = connection) {
    return db('userList_movies')
    .join('movies', 'movies.movieId', 'userList_movies.movieId')
    .where('userList_movies.userId', id)
    .select('movies.title','movies.image', 'userList_movies.rating', 'userList_movies.review')
  
  }

  function showMovie(id, db = connection) {
    return db('userList_movies')
    .join('movies', 'movies.movieID', 'userList_movies.movieId')
    .join('userList', 'userList.id', 'userList_movies.userId')
    .where('userList_movies.movieId', id)
    .select('userList_movies.rating', 'userList_movies.review', 'userList.name')
  }
  
module.exports = {
    listUsers,
    listMovies,
    listMovieById,
    showWatched,
    showMovie
  }