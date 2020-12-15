const express = require("express")
const server = express()
const helmet = require("helmet")
const cors = require("cors")
const authRouter = require("../api/auth/auth-router")
const userRouter = require('../api/users/users-router')

server.use(express.json())
server.use(helmet())
server.use(cors())
server.use("/api/auth", authRouter)
server.use("/api/pronouns", userRouter)
server.get("/", (req, res) => {
    res.json({api:'do be up'})
})
module.exports = server