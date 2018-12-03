'use strict'

const PORT = 3000;

let app = require('express')()
let http = require('http').Server(app)
let io = requier('socket.io')(http)


http.listen(PORT,function(){
    console.log('listening on' + PORT)
    console.log(__dirname)
})

app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html')
})

io.on('connection',function(socket){
    console.log('user connected')
})