const server = require('./api/server')
const PORT = 4000


server.listen(PORT, () => {
    console.log(`SHH i cant hear you over port ${PORT}`)
})