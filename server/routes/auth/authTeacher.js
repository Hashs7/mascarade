const express = require('express');
const { body } = require('express-validator/check/index');
const Teacher = require('../../models/Teacher');
const authController = require('../../controllers/authTeacher');

const router = express.Router();

router.put(
    '/signup',
    [
        body('email')
            .isEmail()
            .withMessage('Entrez un email valide')
            .custom((value, { req }) => {
                return Teacher.findOne({ email: value }).then(userDoc => {
                    if (userDoc) {
                        return Promise.reject('Cet email est déjà pris');
                    }
                });
            })
            .normalizeEmail(),
        body('password')
            .trim()
            .isLength({ min: 5 }),
        body('firstname')
            .trim()
            .not()
            .isEmpty(),
        body('surname')
            .trim()
            .not()
            .isEmpty()
    ],
    authController.signup
);

router.post('/login', authController.login);

module.exports = router;
