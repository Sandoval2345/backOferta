import express from 'express';
import salasFunctions from '../controllers/salas.controller.js';

const router = express.Router();

//get
router.get('/getSalas', salasFunctions.getSalas);
router.get('/getSalasById/:codsala',salasFunctions.getSalaById);
//post
router.post('/registSalas',salasFunctions.createSala); //ruta para guardar datos, por eso se usa post
//delete
router.delete('/deleteSalas/:codsala',salasFunctions.deleteSala);

//put
router.put('/updateSalas/:codsala',salasFunctions.updateSala);




export default router;