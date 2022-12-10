const express =require ('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config');


// Crear el servidor de express
const app=express();



//Base de datos
dbConnection();
// CORS
app.use(cors())


// Directorio Público
app.use( express.static(__dirname + '/public') );
//Lectura y parseo de la informacion
app.use(express.json());

//Rutas
app.use('/api/auth',require('./routes/auth'));
app.use('/api/contact',require('./routes/contact'));
app.use('/api/company',require('./routes/company'));
app.use('/api/events', require('./routes/events') );
app.use('/api/notes', require('./routes/notes') );
app.use('/api/emails', require('./routes/emails') );



// Escuchar peticiones
app.listen(process.env.PORT,()=>{
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
})
