//uso de variables de entorno

require('dotenv').config();

module.exports = {
    MONGO_URI : process.env.MONGO_URI
}