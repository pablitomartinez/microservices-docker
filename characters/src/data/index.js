const characters = require('./characters.json');
const axios = require('axios');

const url = 'http://database:8004/Character'

module.exports = {
    list : async () => {
        const { data } = await axios.get(url) 
        // console.log(data);
        return data
    },
    create: async()=>{
        throw Error('Hay un error al crear el personaje')
    },

}
