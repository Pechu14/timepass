//codigo principal
const express = require('express');
const app = express();
const path = require('path');

//importamos middlewares hora y validarhora
const horaMiddleware = require('./middlewares/horaMiddleware');
const validarHora = require('./middlewares/validarHora');

//importamos rutas index y endroute
const indexRouter = require('./routes/index');
const endrouteRouter = require('./routes/endroute');

//para usar middlewares
app.use(horaMiddleware);  // Middleware para obtener la hora actual
app.use('/', indexRouter);  // Ruta principal
app.use('/endroute', validarHora, endrouteRouter);  // Ruta para validar la hora y acceder a la página final

//para manejar errores
app.use((req, res, next) => {
    res.status(404).send('Página no encontrada');
});

//para escuchar el servidor
app.listen(3000, () => {
    console.log(`Servidor escuchando en http://localhost:3000`);
});