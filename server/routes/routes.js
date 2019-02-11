const express = require('express')
const router = express.Router()
const db = require('../db/db')

router.get('/users', (req,res)=>{
return db.listUsers()
.then(users =>{
    res.json(users)
})
})


module.exports = router