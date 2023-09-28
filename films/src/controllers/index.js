const { catchedAsync } = require('../utils');

module.exports = {
    createFilms: catchedAsync(require('./createFilms')),
    getFilms: catchedAsync(require('./getFilms'))
}