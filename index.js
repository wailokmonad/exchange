const express = require('express')
const app = express()
const router = require("./router");
let server;
const PORT = 3000
const HOST = '0.0.0.0'

app.use(router); 

app.use((err, req, res, next) => {
    res.send({
        success: false,
        err
    });
});
 
server = app.listen(PORT, HOST)

module.exports = server;