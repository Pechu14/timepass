
// horaMiddleware.js , para obtener la hora y los minutos

const horaMiddleware = (req, res, next) => {
    const fecha = new Date();
    //con req manda la hora y los minutos
    req.horaActual = fecha.getHours();
    req.minutosActuales = fecha.getMinutes();
    next();
};

module.exports = horaMiddleware;