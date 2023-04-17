'use strict'
var moongose = require('mongoose');
var app = require('./app');
var port = 3800;
//DB connections
moongose.Promise = global.Promise;
moongose.connect('mongodb://127.0.0.1:27017/node_changeorg', {
    useNewUrlParser: true
})
    .then(() => {
        console.log("La conexion a la BBDD se ha realizado ok");
//crear servidor
        app.listen(port, () => {
            console.log('Server running')
        });
    })
    .catch(err => console.log(err));

