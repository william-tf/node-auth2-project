const express = require('express')
const router = express.Router()
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../users/users-modal")
const createToken = require("./createToken")
const { isValid } = require("./restricted-middleware")




router.post("/register", (req, res) => {

    const credentials = req.body
    //console.log(credentials)
    if(isValid(credentials)){
        //console.log(credentials)
        const hash = bcrypt.hashSync(credentials.password, 9)
        credentials.password = hash
        User.add(credentials)
        .then(usr => {
            console.log(usr)
            res.status(201).json({data:usr})
        })
        .catch(err => res.status(500).json(err.message))
    } else{
        res.status(400).json({message:"invalid creds"})
    }

    



})

router.post("/login", (req,res) => {

    if(isValid(req.body)){
        User.findBy({username: req.body.username})
        .then(([user]) => {
            if(user && bcrypt.compareSync(req.body.password, user.password)){
                const token = createToken(user)
                res.status(200).json({
                    message: "you made it, " + user.username,
                    token
                })
            } else {
                res.status(401).json("nice try buddy boi")
            }
        })
        .catch(err => res.status(500).json(err.message))
    } else{
        res.status(401).json("you tried wrong cred")
    }


})

module.exports = router