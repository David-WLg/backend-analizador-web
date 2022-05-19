const { DataTypes } = require("sequelize");
const { db } = require("../database/config");


const SimbolTable = db.define('tabla_simbolos', {
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
    timestamps: false
})

module.exports = SimbolTable;