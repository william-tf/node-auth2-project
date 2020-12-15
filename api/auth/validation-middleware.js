const jwt = require('jsonwebtoken')
const secret = "toppa"


module.exports = (req, res, next) => {
    
    const token = req.headers.authorization
  
    if (!token) {
      res.status(401).json('we wants token')
    } else {
        console.log(token)
      jwt.verify(token, secret, (err, decoded) => {
        if (err) {
          res.status(401).json(err.message)
        } else {
          req.decodedToken = decoded
          next()
        }
      })
    }
  };
  