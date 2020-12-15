const express = require('express')
const User = require("./users-modal")
const router = express.Router()
const restrict = require('../auth/validation-middleware')
router.get("/users", restrict, (req, res) => {
    User.find()
    .then(users => {
        res.status(200).json(users)
    })
    .catch(err => res.send(err))
})



module.exports = router