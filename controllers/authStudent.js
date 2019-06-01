const {validationResult} = require('express-validator/check');
const bcrypt             = require('bcryptjs');
const jwt                = require('jsonwebtoken');
const {logError}         = require('../utils');
const io                 = require('../socket');
const Student            = require('../models/Student');
const Flash            = require('../models/Flash');
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
    let studentDoc;

    bcrypt
        .hash(password, 12)
        .then(hashedPw => {
            newStudent = new Student({
                email: email,
                password: hashedPw,
                firstname: firstname,
                surname: surname,
                gender: gender,
                roomId: roomId,
                progress: 0,
                achievements: {
                    points: 0,
                    shares: 0,
                    reports: 0
                },
                flash: null
            });
            return newStudent.save();
        })
        .then(student => {
            idStudent = student._id;
            studentDoc = student;

            const flash = new Flash({
                student: idStudent,
                total: 0,
                studentsFrom: [],
                studentsTo: []
            });
            return flash.save();
        })
        .then(flash => {
            studentDoc.flash = flash;
            return studentDoc.save()
        })
        .then(student => {
            return Session.findOne({shortId: roomId});
        })
        .then(session => {
            session.students.push(newStudent);
            return session.save();
        })
        .then(result => {
            io.getIO().emit('studentConnection', {
                student: {
                    _id: idStudent,
                    firstname,
                    surname,
                    gender,
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
            io.getIO().emit('studentConnection', {
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

exports.updateAchievement = (req, res, next) => {
    const { studentId, sessionId, achievType, amount } = req.body;
    const type = ['points', 'shares', 'reports'];

    let realAmount;

    Student.findById(studentId)
        .populate()
        .then(student => {
            if(!type.includes(achievType)) {
                logError("le type n'est pas correct", 401);
            }
            student.achievements[achievType] += amount;
            realAmount = student.achievements[achievType];
            return student.save()
        })
        .then(result => {
            const payload = {
                studentId: studentId,
                sessionId: sessionId,
                achievType: achievType,
                amount: realAmount
            };
            io.getIO().emit('updateAchievement', payload);
            console.log('emit io', payload);
            res.status(201).json({
                message: 'Achievement a été mis à jour',
                payload
            });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};
