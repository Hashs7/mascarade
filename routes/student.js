const express = require('express');
const { body } = require('express-validator/check/index');
const Student = require('../models/Student');
const studentController = require('../controllers/student');

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
    studentController.signup
);

router.post('/login', studentController.login);

router.put('/achievement', studentController.updateAchievement);

router.put('/charity', studentController.updateCharity);

router.put('/dialog', studentController.updateDialog);

router.put('/scene', studentController.updateScene);

router.put('/slider', studentController.updateSlider);

router.put('/quizz', studentController.updateQuizz);

module.exports = router;
