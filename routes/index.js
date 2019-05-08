const authStudent = require('./auth/authStudent');
const authTeacher = require('./auth/authTeacher');
const session     = require('./session');

exports.init = (app) => {
    app.use('/auth/student', authStudent);
    app.use('/auth/teacher', authTeacher);
    app.use('/session', session);

    // All invalid routes
    app.use((error, req, res, next) => {
        console.log(error);
        const status = 500;
        // const status  = error.statusCode || 500;
        const message = error.message;
        const data    = error.data;
        res.status(status).json({message: message, data: data});
    });
};
