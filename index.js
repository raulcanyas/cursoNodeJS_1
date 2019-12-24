const express = require('express');
const colors = require('colors');

const server = express();

server.get('/', function(req, res){
    res.send('<h1>Hola Mundo en Node JS con Express</h1>')
});

server.listen(3000, function() {
    console.log('Servidor Web en puerto 3000'.yellow);
});




