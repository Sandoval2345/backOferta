
import e from "express";
import pool from "../Database/conexion.js"


let salasFunctions = {};


salasFunctions.getSalas = async(req, res) =>{
    await pool
        .query('SELECT aforomax, tipo, codsala FROM salas')
        .then((result) => {
            res.status(200).json(result.rows);
        })
        .catch((e) => console.log(e)); //responde con un objeto json y el status es el codigo de estado, por defecto es 200
}


salasFunctions.getSalaById = async(req, res) =>{ //el id se entrega por url
    await pool
        .query('SELECT aforomax, tipo, codsala FROM salas WHERE codsala = $1',[req.params.codsala])//codigo en busqueda
        .then((result) => {
        res.status(200).json(result.rows);
        })
        .catch((e) => console.log(e));

}

salasFunctions.createSala = async(req,res)=>{
    const { aforoMax, tipo, codsala } = req.body; //datos de la nueva sala CREO que es un json
    await pool
    .query('INSERT INTO salas (aforoMax, tipo, codsala) VALUES ($1,$2,$3)',[aforoMax, tipo, codsala])
    .then((result) => {
        console.log(result);
        res.json({
        message: 'Sala creada correctamente',
        body: {
            sala: {aforoMax, tipo, codsala}
        }
        });
    })
        .catch((e) => console.log(e));
}



salasFunctions.deleteSala = async(req, res)=>{ //se eliminara a traves de id por url
    await pool
    .query('DELETE FROM salas WHERE codsala = $1',[req.params.codsala])
    .then((result) => {
    res.json(`Sala ${req.params.codsala} eliminada correctamente`);
    })
    .catch((e) => console.log(e));
}

salasFunctions.updateSala = async(req, res)=>{
    const { aforoMax, tipo, codsala} = req.body; //datos posibles a edicion
    await pool
    .query('UPDATE salas SET aforoMax = $1, tipo = $2, codsala = $3 WHERE codsala = $4',[aforoMax,tipo,codsala, req.params.codsala])
    .then((result) => {
        res.json('sala actualizada correctamente');
    })
    .catch((e) => console.log(e));
}

export default salasFunctions;
