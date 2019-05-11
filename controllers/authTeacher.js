const {validationResult} = require('express-validator/check');
const bcrypt             = require('bcryptjs');
const jwt                = require('jsonwebtoken');
const {logError}         = require('../utils');
const Teacher            = require('../models/Teacher');

exports.signup = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        logError('La validation a échouée', 422, errors);
    }

    const {email, firstname, surname, password} = req.body;
    console.log(req.body, "body");

    bcrypt
        .hash(password, 12)
        .then(hashedPw => {
            const teacher = new Teacher({
                email: email,
                password: hashedPw,
                firstname: firstname,
                surname: surname,
                sessions: []
            });
            return teacher.save();
        })
        .then(result => {
            const name = firstname + ' ' + surname;
            res.status(201).json({ message: 'Le profil professeur a été créé', userId: result._id, name: name });
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
    let loadedTeacher;

    Teacher.findOne({ email: email })
        .populate({
            path: 'sessions',
            populate: {
                path: 'students',
                model: 'Student'
            }
        })
        .then(teacher => {
            if (!teacher) {
                logError('Aucun utilisateur avec cet email n\'a été trouvé', 401);
            }

            loadedTeacher = teacher;
            return bcrypt.compare(password, teacher.password);
        })
        .then(isEqual => {
            // Escape validation / Admin password is not crypted
            if (!isEqual) {
                logError('Mauvais mot de passe', 401);
            }

            const token = jwt.sign(
                {
                    email: loadedTeacher.email,
                    teacherId: loadedTeacher._id.toString()
                },
                process.env.SECRET_TOKEN_KEY,
                {expiresIn: '2h'}
            );
            const name = loadedTeacher.firstname + ' ' + loadedTeacher.surname;
            res.status(200).json({
                token: token,
                teacherId: loadedTeacher._id.toString(),
                name: name,
                sessions: loadedTeacher.sessions
            });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.isAuth = (req, res, next) => {
    res.status(200).send('Valid token')
};

