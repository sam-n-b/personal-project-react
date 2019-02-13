const express = require('express')
const router = express.Router()
const db = require('../db/db')

router.get('/users', (req,res)=>{
return db.listUsers()
.then(users =>{
    res.json(users)
})
})

router.get('/movies', (req,res)=>{
    return db.listMovies()
    .then(movies =>{
        res.json(movies)
    })
    })

    router.get('/movie/:id', (req,res)=>{
        id= req.params.id
        return db.listMovieById(id)
        .then(console.log(id))
        .then(movie =>{
            res.json(movie)
        })
        })

module.exports = router