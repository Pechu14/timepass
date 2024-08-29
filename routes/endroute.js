//endroute.js para crear la ruta final

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`
        <html>
        <body>
            <h1>Ruta final</h1>
            <p>¡Bienvenido a la ruta final!</p>
        </body>
        </html>
    `);
});

module.exports = router;