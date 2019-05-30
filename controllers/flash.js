const {validationResult} = require('express-validator/check');
const {logError}         = require('../utils');
const Flash            = require('../models/Flash');
const Student            = require('../models/Student');


exports.sendFlash = (req, res, next) => {
    let flashId;
    let flashTotal;
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
            return Flash.findById(flashId).lean();
        })
        .then(flash => {
            console.log('studentToId', studentToId);

            const studentToIndex = flash.studentsTo.findIndex(el => el.student.toString() === studentToId);
            console.log('studentToIndex', studentToIndex);

            if(studentToIndex !== -1) {
                flash.studentsTo[studentToIndex].number += 1;
            } else {
                flash.studentsTo.push({
                    number: 1,
                    student: studentToId
                })
            }
            return Flash.updateOne({_id: flash._id}, flash)
        })
        .then(result => {
            return Flash.findOne({student: studentToId}).lean();
        })
        .then(flash => {
            const studentFromIndex = flash.studentsFrom.findIndex(el => el.student.toString() === studentFromId);
            console.log('studentFromIndex', studentFromIndex);

            if(studentFromIndex !== -1) {
                flash.total += 1;
                flash.studentsFrom[studentFromIndex].number += 1;
            } else {
                flash.total = 1;
                flash.studentsFrom.push({
                    number: 1,
                    student: studentFromId
                })
            }
            flashTotal = flash.total;
            return Flash.updateOne({_id: flash._id}, flash)
        })
        .then(result => {
            res.status(201).json({
                message: 'Le flash a été envoyé',
                amount: flashTotal
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
