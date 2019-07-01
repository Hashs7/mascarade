const express           = require('express');
const {body}            = require('express-validator/check/index');
const Teacher           = require('../models/Teacher');
const teacherController = require('../controllers/teacher');
const isAuth            = require('../middlewares/is-auth');

const router = express.Router();

router.put(
    '/signup',
    [
        body('email')
            .isEmail()
            .withMessage('Entrez un email valide')
            .custom((value, {req}) => {
                return Teacher.findOne({email: value}).then(userDoc => {
                    if (userDoc) {
                        return Promise.reject('Cet email est déjà pris');
                    }
                });
            })
            .normalizeEmail(),
        body('password')
            .trim()
            .isLength({min: 5}),
        body('firstname')
            .trim()
            .not()
            .isEmpty(),
        body('surname')
            .trim()
            .not()
            .isEmpty()
    ],
    teacherController.signup
);

router.post('/login', teacherController.login);

router.get('/is-auth', isAuth, teacherController.isAuth);


module.exports = router;
