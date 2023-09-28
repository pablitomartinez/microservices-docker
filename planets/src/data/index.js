// const planets = require('./planets.json');
const axios = require('axios');

module.exports = {
    list : async ()=>{
        const { data } = axios.get('http://database:8004/Planet');
        return data
    }
}