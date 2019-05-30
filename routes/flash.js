const express         = require('express');
const {body}          = require('express-validator/check/index');
const flashController = require('../controllers/flash');
const isAuth          = require('../middlewares/is-auth');

const router = express.Router();

router.put(
    '/send',
    /*isAuth,
    [
        body('className')
            .trim()
            .not()
            .isEmpty()
    ],*/
    flashController.sendFlash
);

// router.get('/all', isAuth, flashController.getSessions);


module.exports = router;
