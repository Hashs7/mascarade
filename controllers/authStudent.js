const {validationResult} = require('express-validator/check');
const bcrypt             = require('bcryptjs');
const jwt                = require('jsonwebtoken');
const {logError}         = require('../utils');
const io                 = require('../socket');
const Student            = require('../models/Student');
const Flash            = require('../models/Flash');
const Session            = require('../models/Session');

const shouldShowBilan = (student) => {
    const quizzValid = student.quizz.length === 5;
    const charityValid = student.charity.type;
    const harassmentValid = student.harassment.action;
    const fakeNewsValid = student.fakeNews.action;
    const dialogCelebrityValid = student.dialog.celebrity.state === 'stop' || student.dialog.celebrity.state === 'report';
    const dialogHackerValid = student.dialog.hacker.state === 'stop' || student.dialog.hacker.state === 'report';

    console.log('shouldShowBilan', quizzValid, charityValid, harassmentValid, fakeNewsValid, dialogCelebrityValid, dialogHackerValid);

    if(quizzValid && charityValid && harassmentValid && fakeNewsValid && dialogCelebrityValid && dialogHackerValid) {
        return true
    } else {
        return false

    }
}

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
                quizz: [],
                slider: 0,
                progress: 0,
                harassment: {
                    action: null
                },
                fakeNews: {
                    action: null
                },
                achievements: {
                    points: 0,
                    shares: 0,
                    reports: 0
                },
                dialog: {
                    celebrity: {
                        conversation: [],
                        state: null
                    },
                    hacker: {
                        conversation: [],
                        state: null
                    }
                },
                charity: {
                    type: null,
                    title: null,
                    description: null
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
            io.getIO().emit('newConnection', {
                student: {
                    _id: idStudent,
                    firstname,
                    surname,
                    gender,
                    progress: 0,
                    quizz: [],
                    slider: 0,
                    harassment: {
                        action: null
                    },
                    fakeNews: {
                        action: null
                    },
                    achievements: {
                        points: 0,
                        shares: 0,
                        reports: 0
                    },
                    charity: {
                        type: null,
                        title: null,
                        description: null
                    },
                    dialog: {
                        celebrity: {
                            conversation: [],
                            state: null
                        },
                        hacker: {
                            conversation: [],
                            state: null
                        }
                    },
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

    let realAmount, currentStudent;

    Student.findById(studentId)
        .populate()
        .then(student => {
            if(!type.includes(achievType)) {
                logError("le type n'est pas correct", 401);
            }
            currentStudent = student;
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

            if(shouldShowBilan(currentStudent)) {
                io.getIO().emit('showBilan', true);
            }

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

exports.updateCharity = (req, res, next) => {
    const { studentId, sessionId, charityType, title, description } = req.body;
    const type = ['starvation', 'violences', 'war', 'racism', 'homophobie', 'pollution'];

    Student.findById(studentId)
        .populate()
        .then(student => {
            if(!type.includes(charityType)) {
                logError("le type n'est pas correct", 401);
            }

            student.charity.type = charityType;
            student.charity.title = title;
            student.charity.description = description;
            return student.save()
        })
        .then(result => {
            const payload = {
                studentId: studentId,
                sessionId: sessionId,
                charityType,
                title,
                description
            };

            io.getIO().emit('updateCharity', payload);
            res.status(201).json({
                message: 'Charity a été mis à jour',
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

exports.updateDialog = (req, res, next) => {
    const { studentId, sessionId, dialogType, response, state } = req.body;
    const type = ['celebrity', 'hacker'];
    let conversation;

    Student.findById(studentId)
        .populate()
        .then(student => {
            if(!type.includes(dialogType)) {
                logError("le type n'est pas correct", 401);
            }

            student.dialog[dialogType].conversation.push(response);
            student.dialog[dialogType].state = state;
            conversation = student.dialog[dialogType].conversation;
            return student.save()
        })
        .then(result => {
            const payload = {
                studentId: studentId,
                sessionId: sessionId,
                dialogType,
                conversation,
                state
            };

            io.getIO().emit('updateDialog', payload);
            res.status(201).json({
                message: 'La conversation a été mis à jour',
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

exports.updateScene = (req, res, next) => {
    const { studentId, sessionId, sceneType, action } = req.body;
    const type = ['harassment', 'fakeNews'];

    Student.findById(studentId)
        .populate()
        .then(student => {
            if(!type.includes(sceneType)) {
                logError("le type n'est pas correct", 401);
            }

            student[sceneType].action = action;
            return student.save()
        })
        .then(result => {
            const payload = {
                studentId: studentId,
                sessionId: sessionId,
                sceneType,
                action
            };

            io.getIO().emit('updateScene', payload);
            res.status(201).json({
                message: 'La scène a été mis à jour',
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

exports.updateQuizz = (req, res, next) => {
    const { studentId, sessionId, responses } = req.body;

    Student.findById(studentId)
        .populate()
        .then(student => {
            student.quizz = responses;
            return student.save()
        })
        .then(result => {
            const payload = {
                studentId: studentId,
                sessionId: sessionId,
                responses
            };

            io.getIO().emit('updateQuizz', payload);
            res.status(201).json({
                message: 'La scène a été mis à jour',
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
