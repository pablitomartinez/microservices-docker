const { catchedAsync } = require('../utils')

module.exports = {
    getCaracters: catchedAsync(require('./getCharacters')),
    createCharacters: catchedAsync(require('./createCharacters'))
}