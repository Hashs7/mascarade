const express = require('express');
const { body } = require('express-validator/check/index');
const Student = require('../../models/Student');
const authController = require('../../controllers/authStudent');

const router = express.Router();

router.put(
    '/signup',
    [
        body('email')
            .isEmail()
            .withMessage('Entrez un email valide')
            .custom((value, { req }) => {
                return Student.findOne({ email: value }).then(userDoc => {
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
            .isEmpty(),
        body('gender')
            .trim()
            .not()
            .isEmpty()
    ],
    authController.signup
);

router.post('/login', authController.login);

router.put('/achievement', authController.updateAchievement);

router.put('/charity', authController.updateCharity);

router.put('/dialog', authController.updateDialog);

router.put('/scene', authController.updateScene);

module.exports = router;
