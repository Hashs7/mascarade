const Student = require('./student');
const Teacher = require('./teacher');
const session = require('./session');
const flash   = require('./flash');

exports.init = (app) => {
    app.use('/student', Student);
    app.use('/teacher', Teacher);
    app.use('/session', session);
    app.use('/flash', flash);

    // All invalid routes
    app.use((error, req, res, next) => {
        console.log(error);
        const status  = 500;
        // const status  = error.statusCode || 500;
        const message = error.message;
        const data    = error.data;
        res.status(status).json({message: message, data: data});
    });
};
