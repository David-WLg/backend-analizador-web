const express = require("express");
const cors = require('cors');
const { dbConnection } = require("../database/config");



class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.paths = {
            query: '/api/query'
        }

        this.conectDB();

        this.middlewares();

        this.routes();
        
    }

    async conectDB() {
        await dbConnection();
    }

    middlewares() {
        this.app.use( cors() )
        this.app.use( express.json() )
        this.app.use( express.static('public') )
    }

    routes() {
        this.app.use(this.paths.query, require('../routes/query'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto ', this.port);
        })
    }

}

module.exports = Server;