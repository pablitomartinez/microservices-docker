const Character = require('../data')
const { response } = require('../utils');

module.exports = async (req,res)=>{
    const newCharacter = await new Character.create()
    response(res,201, newCharacter);
}