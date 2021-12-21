import express from 'express';
import ofertaFunctions from '../controllers/oferta.controller.js';

const router2 = express.Router();

router2.post('/ofertaAsignatura', ofertaFunctions.estimacionPrereqAsignatura);
router2.post('/gofertaAsignatura', ofertaFunctions.guardarOfertaAsignatura);
router2.get('/getOfertas/:semestre',ofertaFunctions.getOfertas)

export default router2;