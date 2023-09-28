//configuracion o todos los campos que vamos a querer trabajar (atributos) para los personajes

const { Schema } = require('mongoose');

//definir el schema para los personajes
//  campos que vamos a trabahr y tipo de datos

//! INVESTIGAR EN DOC DE MONGO LOS DISTINTOS TYPE 

const characterSchema = new Schema({
    _id: String, 
    name: String,
    height: String,
    mass: String,
    hair_color: String,
    skin_color: String,
    eye_color: String,
    birth_year: String,
    gender: String,
    homeworld: {type: String, ref:'Planet'}, // REF ID PLANETS
    films: [{type: String, ref:'Film'}] // REF A PELICULAS
});

//? METODOS ESTATICOS
// no se usan ()=>{} por que queremos usar el THIS
characterSchema.statics.list = async function(){
    return await this.find()
    .populate('homeworld', ['_id','name'])
    .populate('films', ['_id','title'])
};

characterSchema.statics.get = async function(id){
    return await this.findById(id)
    .populate('homeworld', ['_id','name'])
    .populate('films', ['_id','title'])
};

characterSchema.statics.insert = async function(character){
    return await this.create(character)
}

module.exports = characterSchema;