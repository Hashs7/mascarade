const path        = require('path');
const fs          = require('fs');
const express     = require('express');
const bodyParser  = require('body-parser');
const cors        = require('cors');
const morgan      = require('morgan');
const helmet      = require('helmet');
const router      = require('./routes');
const app         = express();

const authStudent = require('./routes/auth/authStudent');
const authTeacher = require('./routes/auth/authTeacher');
const session     = require('./routes/session');

const accessLogStream = fs.createWriteStream(
    path.join(__dirname, 'access.log'),
    {flags: 'a'});

app.use(cors());
app.use(morgan('dev', {stream: accessLogStream}));
app.use(bodyParser.json());
app.use(helmet());

// router.init(app);

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


module.exports = app;
