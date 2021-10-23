const router = require('express').Router();
const bcrypt = require('bcryptjs');
const { User } = require('../../db');
const { check, validationResult } = require('express-validator');
const moment = require('moment');
const jwt = require('jwt-simple');
const getIP = require('ipware')().get_ip;


router.post('/register', [
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password es obligatorio').not().isEmpty()
],async (req, res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({ errores: errors.array() });
    }

    req.body.password = bcrypt.hashSync(req.body.password, 10);
    const user = await User.create(req.body);
    res.json(user);
});

router.post('/login', async (req, res) => {

    const user = await User.findOne({ where: {email: req.body.email} });
    console.log('user: ' + JSON.stringify(user));
    
    var ipInfo = getIP(req);
    console.log('IP:' + JSON.stringify(ipInfo.clientIp));
   
    if(user){
        const isLoginCorrect = bcrypt.compareSync(req.body.password, user.password);
        if(isLoginCorrect){
            res.json({ code:200, success: createToken(user) });
        }else{
            res.json({code: 402, error: 'Usario y/o contraseña no son validos.'});
        }

    }else{
        res.json({ code: 401, error: 'Usario y/o contraseña no son validos.'});
    }
});

const createToken = (user) => {
    const payload = {
        userId: user.id,
        createdAt: moment().unix(),
        expiredAt: moment().add(7, 'days').unix()
    }

    return jwt.encode(payload, 'secret barracks poc');
} 

module.exports = router;