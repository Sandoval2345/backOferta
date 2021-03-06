//import cors from 'cors';
import salasroutes from './routes/salas.routes.js';
import ofertaroutes from './routes/oferta.routes.js';

import express from 'express'

const app = express();

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))
//app.use(cors());


//rutas
app.use('/api/salas',salasroutes);
app.use('/api/oferta',ofertaroutes);


const PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
    console.log("Servidor escuchando en el puerto", PORT)
});


