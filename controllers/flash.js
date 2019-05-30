const {validationResult} = require('express-validator/check');
const {logError}         = require('../utils');
const Flash            = require('../models/Flash');
const Student            = require('../models/Student');


exports.sendFlash = (req, res, next) => {
    let flashId;
    const {studentFromId, studentToId} = req.body;

    Student.findById(studentFromId)
        .populate()
        /*.populate({
            path: 'sessions',
            populate: {
                path: 'students',
                model: 'Student'
            }
        })*/
        .then(student => {
            flashId = student.flash;
            return Flash.findById(flashId);
        })
        .then(flash => {
            const studentToIndex = flash.studentsTo.findIndex(student => student._id === studentToId);
            console.log('studentToIndex', studentToIndex);

            if(studentToIndex !== -1) {
                flash.studentsTo[studentToIndex].number += 1;
            } else {
                flash.studentsTo.push({
                    number: 1,
                    student: studentToId
                })
            }
            return flash.save()
        })
        .then(result => {
            return Flash.findOne({student: studentToId});
        })
        .then(flash => {
            const studentFromIndex = flash.studentsFrom.findIndex(student => student._id === req.studentFromId);
            if(studentFromIndex !== -1) {
                flash.total += 1;
                flash.studentsTo[studentFromIndex].number += 1;
            } else {
                flash.total = 1;
                flash.studentsTo.push({
                    number: 1,
                    student: studentFromId
                })
            }
            return flash.save()
        })
        .then(result => {
            res.status(201).json({
                message: 'Le flash a été envoyé'
            });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

/*
exports.getSessions = (req, res, next) => {
    console.log(req.teacherId);

    Teacher.findById(req.teacherId)
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
};*/
