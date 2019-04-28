const {validationResult} = require('express-validator/check');
const bcrypt             = require('bcryptjs');
const jwt                = require('jsonwebtoken');
const shortid            = require('shortid');
const {logError}         = require('../utils');
const Session            = require('../models/Session');
const Teacher            = require('../models/Teacher');

exports.newSession = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        logError('La validation a échouée', 422, errors);
    }

    const {className, teacherId} = req.body;
    const shortId = shortid.generate();
    console.log(teacherId, req, "teacher");
    const session = new Session({
        shortId: shortId,
        className: className,
        teacher: teacherId,
        students: []
    });
    session.save()
        .then(result => {
            return Teacher.findById(teacherId)
        })
        .then(teacher => {
            teacher.sessions.push(session);
            return teacher.save()
        })
        .then(result => {
            res.status(201).json({
                message: 'La session a été créé',
                sessionId: result._id,
                shareId: shortId
            });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};
