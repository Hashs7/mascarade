const {validationResult} = require('express-validator/check');
const shortid            = require('shortid');
const {logError}         = require('../utils');
const Session            = require('../models/Session');
const Teacher            = require('../models/Teacher');

exports.newSession = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        logError('La validation a échouée', 422, errors);
    }

    const {className} = req.body;
    let shortId = shortid.generate();
    shortId = shortId.toUpperCase();


    const session = new Session({
        shortId: shortId,
        className: className,
        teacher: req.teacherId,
        students: []
    });

    session.save()
        .then(_ => {
            return Teacher.findById(req.teacherId)
        })
        .then(teacher => {
            teacher.sessions.push(session);
            return teacher.save()
        })
        .then(_ => {
            res.status(201).json({
                message: 'La session a été créé',
                session: session,
            });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};


exports.getSessions = (req, res, next) => {
    Teacher.findById(req.teacherId)
        .populate({
            path: 'sessions',
            populate: {
                path: 'students',
                model: 'Student'
            }
        })
        /*.exec((err, sessions) => {
            sessions.
            TODO don't return password and email
        })*/
        .then(teacher => {
            console.log(teacher);
            res.status(201).json({
                sessions: teacher.sessions
            });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.getSessionById = (req, res, next) => {
    let {sessionId} = req.params;
    sessionId = sessionId.toUpperCase();

    Session.findById(sessionId)
        .populate({
            path: 'students',
            model: 'Student'
        })
        .then(session => {
            res.status(201).json({
                session: session
            });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
    /*Teacher.findById(req.teacherId)
        .populate({
            path: 'sessions',
            populate: {
                path: 'students',
                model: 'Student'
            }
        })
        /!*.exec((err, sessions) => {
            sessions.
            TODO don't return password and email
        })*!/
        .then(teacher => {
            console.log(teacher);
            res.status(201).json({
                sessions: teacher.sessions
            });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });*/
};
