const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const authStudent = require('./routes/auth/authStudent');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());


app.get('/users', (req, res) => {
    console.log(req);
    res.send([
        'Thing 1',
        'Thing 2'
    ]);
});

app.get('/', (req, res) => {
    res.send('cc')
});

app.use('/auth/student', authStudent);


app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data });
});

const { HOSTNAME, USERNAME, PASSWORD, PORT } = process.env;
const uri = `mongodb+srv://${USERNAME}:${PASSWORD}@${HOSTNAME}?retryWrites=true`;

mongoose
    .connect(uri, {useNewUrlParser: true})
    .then(res => app.listen(PORT || 3000))
    .catch(err => console.log('connection failed => ', err));