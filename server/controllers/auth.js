const {validationResult} = require('express-validator/check');
const bcrypt             = require('bcryptjs');
const jwt                = require('jsonwebtoken');
const logError           = require('../utils');
const Student            = require('../models/Student');

exports.signup = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // logError('La validation a échouée', 422, errors);
        const error = new Error('La validation a échouée');
        error.statusCode = 422;
        error.data = errors.array();
        throw error;
    }

    const { email, firstname, surname, password, gender } = req.body;

    bcrypt
        .hash(password, 12)
        .then(hashedPw => {
            const student = new Student({
                email: email,
                password: hashedPw,
                firstname: firstname,
                surname: surname,
                gender: gender
            });
            return student.save();
        })
        .then(result => {
            res.status(201).json({message: 'Le profil étudiant a été créé', userId: result._id});
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.login = (req, res, next) => {
    const email    = req.body.email;
    const password = req.body.password;
    let loadedStudent;

    Student.findOne({email: email})
        .then(student => {
            if (!student) {
                logError('Aucun utilisateur avec cet email n\'a été trouvé', 401);
            }

            loadedStudent = student;
            return bcrypt.compare(password, student.password);
        })
        .then(isEqual => {
            if (!isEqual) {
                logError('Mauvais mot de passe', 401);
            }

            const token = jwt.sign(
                {
                    email: loadedStudent.email,
                    studentId: loadedStudent._id.toString()
                },
                'somesupersecretsecret',
                {expiresIn: '2h'}
            );
            res.status(200).json({token: token, studentId: loadedStudent._id.toString()});
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};
