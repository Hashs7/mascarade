const {validationResult} = require('express-validator/check');
const bcrypt             = require('bcryptjs');
const jwt                = require('jsonwebtoken');
const {logError}         = require('../utils');
const io                 = require('../socket');
const Student            = require('../models/Student');
const Session            = require('../models/Session');

exports.signup = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        logError('La validation a échouée', 422, errors);
    }

    const {email, firstname, surname, password, gender} = req.body;
    const roomId = req.query.room;
    let newStudent;
    let idStudent;

    bcrypt
        .hash(password, 12)
        .then(hashedPw => {
            newStudent = new Student({
                email: email,
                password: hashedPw,
                firstname: firstname,
                surname: surname,
                gender: gender,
                scene: 0
            });
            return newStudent.save();
        })
        .then(student => {
            idStudent = student._id;
            return Session.findOne({shortId: roomId});
        })
        .then(session => {
            session.students.push(newStudent);
            return session.save();
        })
        .then(result => {
            console.log(result);
            io.getIO().emit('student-connection', {
                student: {
                    _id: idStudent,
                    firstname,
                    surname,
                    gender,
                    scene: 0
                },
                sessionId: result._id
            });
            res.status(201).json({
                message: 'Le profil étudiant a été créé',
                studentId: idStudent,
                sessionId: result._id
            });
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
            io.getIO().emit('student-connection', {
                student: {
                    firstname: loadedStudent.firstname,
                    surname: loadedStudent.surname,
                    gender: loadedStudent.gender,
                    scene: loadedStudent.scene,
                },
                // sessionId: loadedStudent.sessionId
            });

            const token = jwt.sign(
                {
                    email: loadedStudent.email,
                    studentId: loadedStudent._id.toString()
                },
                process.env.SECRET_TOKEN_KEY,
                {expiresIn: '2h'}
            );

            res.status(200).json({
                token: token,
                studentId: loadedStudent._id.toString(),
                // sessionId: loadedStudent.sessionId
            });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};
