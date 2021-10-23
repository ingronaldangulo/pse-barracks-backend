const router = require('express').Router();

const middlewares = require('./middlewares');
const apiFilmRouter = require('./api/films');
const apiUserRouter = require('./api/users');

router.use('/films', middlewares.checkToken, apiFilmRouter)
router.use('/users', apiUserRouter)

module.exports = router;