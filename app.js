'use strict'

const PORT = 3000;

let app = require('express')()
let http = require('http').Server(app)


http.listen(PORT,function(){
    console.log('listening on' + PORT)
    console.log(__dirname)
})

app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html')
})