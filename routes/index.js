//index.js para crear la ruta que aparece de inicio,con el mensaje,la hora y el boton de ir la ruta final

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    //aparece el mensaje o aparece vacio
    const mensaje = req.query.mensaje || '';
    const horaActual = req.horaActual;
    const minutosActuales = req.minutosActuales;

    res.send(`
        <html>
        <body>
            <h1>Bienvenido</h1>
            <p>La hora actual es: ${horaActual}:${minutosActuales.toString().padStart(2, '0')}</p>
            <form action="/endroute" method="get">
                <button type="submit">Entrar</button>
            </form>
            <p>${mensaje}</p>
        </body>
        </html>
    `);
});

module.exports = router;
