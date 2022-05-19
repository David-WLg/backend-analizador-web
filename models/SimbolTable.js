const { DataTypes } = require("sequelize");
const { db } = require("../database/config");


const SimbolTable = db.define('TABLA_SIMBOLO', {
    codigo: {
        type: DataTypes.STRING
    },
    codigo_categoria: {
        type: DataTypes.STRING
    },
    categoria_lexica: {
        type: DataTypes.STRING
    },
    lexema: {
        type: DataTypes.STRING
    }
}, {
    timestamps: false,
    tableName: 'TABLA_SIMBOLOS'
})

module.exports = SimbolTable;