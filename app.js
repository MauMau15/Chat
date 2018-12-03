'use strict'

const PORT = 3000;

let app = require('express')()
let http = require('http').Server(app)

app.get('/',function(req,res){
    res.send('<h1>Hello</h1>')
})

http.listen(PORT,function(){
    console.log('listening on' + PORT)
})
