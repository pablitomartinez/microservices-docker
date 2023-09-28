//CREAR UNA BDD CON MONGOOSE
// coneccion con la base de datos
const mongoose = require('mongoose');
const { MONGO_URI } = require('../config/envs')

const conn = mongoose.createConnection(MONGO_URI);


//modelo del personaje definido
// const Character = conn.model('Character', require('./schemas/characterSchema'));
// const Film = conn.model('Film', require('./schemas/filmSchema'));
// const Planet = conn.model('Planet', require('./schemas/planetSchema'));


// Character.find().then(res => console.log(res));

// Planet.get(3)
// // .populate('characters', ['_id'])
// // .populate('planets', ['_id'])
// .then((res)=>console.log(res))

// Planet.insert({
//     _id: '20001',
//     name: 'pablo martinez',
//     birth_year:'1991',
//     rotation_period: 'EL ROTATION LOCO'
// }).then(res => console.log(res))

//MODELOS:
module.exports = {
    Character: conn.model('Character', require('./schemas/characterSchema')),
    Film: conn.model('Film', require('./schemas/filmSchema')),
    Planet: conn.model('Planet', require('./schemas/planetSchema'))
};