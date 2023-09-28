// esta fuinciones van a las rutas
// antes de que se ejecute y antes del controllers incluso
const {ClientError} = require('../utils/errors')

module.exports = (req, res, next)=>{
    const { name } = req.body;

    if(name) return next();
    else throw new ClientError('Falta el nombre del personaje', 401)
}