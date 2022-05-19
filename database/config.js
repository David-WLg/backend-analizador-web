const { Sequelize } = require('sequelize');

//Mode DEV
//const db = new Sequelize('analizador', 'root', '', {
//    host: 'localhost',
//    dialect: 'mysql'
//})

const db = new Sequelize( process.env.MYSQL_CNN , {
    dialect: 'mysql'
} );


const dbConnection = async() => {
    try{
        await db.authenticate();
        console.log('Base de datos online');
    }catch( error){
        throw new Error('Error con la base de datos')
    }
}

module.exports = { dbConnection, db }