const http = require('http')
const port = 3001
const requestHandler =
(req,res)=>res.end('congrats you\'re using first  Nodejs application ')
const server =http.createServer(requestHandler)

server.listen(port,(err)=>{
    if(err){return console.log(`unable to start with port ${port}`,err)
}
console.log(`this is Http serveris running on port ${port}`)
})