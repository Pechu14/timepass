
//validarHora.js para validar la hora que traemos desde el horamiddleware.js

const validarHora = (req, res, next) => {
    if (req.horaActual >= 12 && req.horaActual <= 23) {
        next();
        } else {
        //con res configura la reespuesta
        res.locals.mensaje = 'Aún no son las 12 de la mañana';
        //(redirect)para llevar a una ruta específica "/",(encodeURIComponent)para preparar la url y que sea segura,cambia los espacios por ejemplo.
        res.redirect('/?mensaje=' + encodeURIComponent(res.locals.mensaje));
    }
};

module.exports = validarHora;