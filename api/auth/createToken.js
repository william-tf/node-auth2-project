const jwt = require("jsonwebtoken")

const secret = "toppa"
function createToken(user){
const payload = {
subject:user.id,
username:user.username,
department:user.department
}
const options = {
    expiresIn: '2000s'
}
return jwt.sign(payload, secret, options )
}

module.exports = createToken