const router = require('express').Router();

const middlewares = require('./middlewares');
const apiFilmRouter = require('./api/films');
const apiUserRouter = require('./api/users');
const apiSecurityRouter = require('./api/security');

router.use('/films', middlewares.checkToken, apiFilmRouter)
router.use('/security', middlewares.checkToken, apiSecurityRouter)
router.use('/users', apiUserRouter)

module.exports = router;