const router = require('express').Router();


router.get('/', (req, res) => {
    res.json({ session: true});
});


module.exports = router;

