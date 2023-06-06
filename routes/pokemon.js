const express = require('express')
const pokemon = express.Router()
const db = require('../config/database')

pokemon.post("/", async (req, res, next) => {
    const {user_nombre, user_apellido, user_telefono, user_correo, user_direccion} = req.body

    if(user_nombre && user_apellido && user_telefono && user_correo, user_direccion){
        let query = `INSERT INTO empleados (nombre, apellido, telefono, correo, direccion) VALUES('${user_nombre}', '${user_apellido}', ${user_telefono}, '${user_correo}', '${user_direccion}')`
        const rows = await db.query(query)
        if (rows.affectedRows == 1){
            return res.status(201).json({code: 201, message: "Empleado insertado correctamente"})
        }
        return res.status(500).json({code: 500, message: "Ocurrio un error"})
    }

    return res.status(500).json({code: 500, message: "Campos incompletos"})
})

pokemon.delete("/:id([0-9]{1,3})", async (req, res, next) => {
    const query = `DELETE FROM pokemon WHERE pok_id = ${req.params.id}`
    const rows = await db.query(query)

    if(rows.affectedRows == 1){
        return res.status(200).json({code: 200, message: "Pokemon borrado correctamente"})
    }
    return res.status(404).json({code: 404, message: "Pokemon no encontrado"})
})

pokemon.put("/", async (req, res, next) => {
    const {user_nombre, user_apellido, user_telefono, user_correo, user_direccion} = req.body
    if(user_nombre && user_apellido && user_telefono && user_correo, user_direccion){
        let query = `UPDATE empleados SET nombre = '${user_nombre}', apellido = '${user_apellido}', telefono = ${user_telefono}, correo = '${user_correo}', direccion = '${user_direccion}' WHERE correo = '${user_correo}';`
        const rows = await db.query(query)
        if (rows.affectedRows == 1){
            return res.status(200).json({code: 200, message: "Empleado actualizado correctamente"})
        }
        return res.status(500).json({code: 500, message: "Ocurrio un error"})
    }

    return res.status(500).json({code: 500, message: "Campos incompletos"})
})

pokemon.patch("/:id([0-9]{1,3})", async (req, res, next) => {
    if(req.body.pok_name){
        let query = `UPDATE pokemon SET pok_name = '${req.body.pok_name}' WHERE pok_id = ${req.params.id};`
        const rows = await db.query(query)
        if (rows.affectedRows == 1){
            return res.status(200).json({code: 200, message: "Pokemon actualizado correctamente"})
        }
        return res.status(500).json({code: 500, message: "Ocurrio un error"})
    }
    return res.status(500).json({code: 500, message: "Campos incompletos"})
})

pokemon.get("/", async (req, res, next) => {
    const pkmn = await db.query("SELECT * FROM empleados")
    return res.status(200).json({code: 200, message: pkmn})
})

pokemon.get("/email/:correo", async (req, res, next) => {
    const correo = req.params.correo
    const pkmn = await db.query("SELECT * FROM empleados WHERE correo = '" + correo + "';")

    return (pkmn.length > 0) ? res.status(200).json({code: 200, message: pkmn}) : res.status(404).json({code: 404, message: "Empleado no encontrado"})
})

pokemon.get("/:id([0-9]{1,3})", async (req, res, next) => {
    const id = req.params.id
    if (id >= 1 && id <= 722){
        const pkmn = await db.query("SELECT * FROM pokemon WHERE pok_id = " + id + ";")
        return res.status(200).json({code: 200, message: pkmn})
    }
    return res.status(404).json({code: 404, message: "Pokemon no encontrado"})
})

pokemon.get("/:name([A-Za-z]+)", async (req, res, next) => {
    const name = req.params.name
    const pkmn = await db.query("SELECT * FROM empleados WHERE nombre = '" + name + "';")

    return (pkmn.length > 0) ? res.status(200).json({code: 200, message: pkmn}) : res.status(404).json({code: 404, message: "Empleado no encontrado"})
})

module.exports = pokemon

