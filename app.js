'use strict'

const PORT = 3000;

let app = require('express')()
let http = require('http').Server(app)
let io = require('socket.io')(http)


http.listen(PORT,function(){
    console.log('listening on' + PORT)
    console.log(__dirname)
})

app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html')
})

io.on('connection', function(socket){
        console.log('a user connected')

        socket.on('chat message',function(msg){
            console.log('message '+ msg)
        })
})