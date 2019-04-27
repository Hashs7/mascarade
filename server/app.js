const mongoose    = require('mongoose');
const express     = require('express');
const bodyParser  = require('body-parser');
const cors        = require('cors');
const morgan      = require('morgan');
const authStudent = require('./routes/auth/authStudent');
const authTeacher = require('./routes/auth/authTeacher');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

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

const {HOSTNAME, UU_USERNAME, PASSWORD, PORT} = process.env;

const uri = `mongodb+srv://${UU_USERNAME}:${PASSWORD}@${HOSTNAME}?retryWrites=true`;
console.log(uri, UU_USERNAME)
mongoose
    .connect(uri, {useNewUrlParser: true})
    .then(_ => app.listen(PORT || 3000))
    .catch(err => console.log('connection failed => ', err));