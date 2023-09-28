const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.get('/', controllers.getFilms);
router.post('/', controllers.createFilms);

module.exports = router;