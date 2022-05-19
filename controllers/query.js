const { request, response } = require("express");
const { db } = require("../database/config");
const SimbolTable = require("../models/SimbolTable");

const showTable = async (req = request, res = response) => {
    const { query } = req.params;

    try {
        if (query === 'CATEGORIA_LEXICA') {

            const [result] = await db.query('SELECT * FROM CATEGORIA_LEXICA');
            return res.json({
                ok: true,
                result
            })
        } else if (query === 'TABLA_SIMBOLOS') {

            const [result] = await db.query('SELECT id, lexema, codigo_categoria, codigo FROM TABLA_SIMBOLOS');
            return res.json({
                ok: true,
                result
            })
        } else if (query === 'TABLA') {

            const [result] = await db.query('SELECT * FROM TABLA_SIMBOLOS');
            return res.json({
                ok: true,
                result
            })
        }

        res.json({
            ok: false,
            msg: 'Error en la consulta'
        })
    } catch (error) {
        console.log('ERROR SHOW TABLE: ', error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor, comuniquese con el administrador'
        })
    }
}

const insertTable = async (req = request, res = response) => {
    const { simbols } = req.body;
    let table = null;
    try {
        if (!simbols) {
            return res.status(400).json({
                ok: false,
                msg: 'Faltan los simbolos'
            })
        }

        await db.query('TRUNCATE TABLE TABLA_SIMBOLOS');

        for( item of simbols ){
            table = new SimbolTable( item );
            await table.save();
        }

        res.json({
            ok: true,
            simbols
        })
        
    } catch (error) {
        console.log('ERROR INSERT TABLE: ', error);
        return res.status(500).json({
            ok: false,
            msg: 'Por favor, comuniquese con el administrador'
        })
    }


    
}

module.exports = { showTable, insertTable }