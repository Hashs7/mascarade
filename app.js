const path        = require('path');
const fs          = require('fs');
const https       = require('https');
const mongoose    = require('mongoose');
const express     = require('express');
const bodyParser  = require('body-parser');
const cors        = require('cors');
const morgan      = require('morgan');
const helmet      = require('helmet');
const authStudent = require('./routes/auth/authStudent');
const authTeacher = require('./routes/auth/authTeacher');

const app = express();

const accessLogStream = fs.createWriteStream(
    path.join(__dirname, 'access.log'),
    {flags: 'a'});

app.use(morgan('dev', {stream: accessLogStream}));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());

app.use('/auth/student', authStudent);
app.use('/auth/teacher', authTeacher);

// Invalid route
app.use((error, req, res, next) => {
    console.log(error);
    const status  = error.statusCode || 500;
    const message = error.message;
    const data    = error.data;
    res.status(status).json({message: message, data: data});
});

const {HOSTNAME, DB_USER, DB_PASSWORD, PORT} = process.env;

const uri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${HOSTNAME}?retryWrites=true`;

mongoose
    .connect(uri, {useNewUrlParser: true})
    .then(_ => app.listen(PORT || 3000))
    .catch(err => console.log('connection failed => ', err));