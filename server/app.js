const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

const { HOSTNAME, USERNAME, PASSWORD, PORT } = process.env;
const uri = `mongodb+srv://${USERNAME}:${PASSWORD}@${HOSTNAME}?retryWrites=true`;

app.get('/users', (req, res) => {
    res.send([
        'Thing 1',
        'Thing 2'
    ])
});

app.get('/', (req, res) => {
    res.send('cc')
});

console.log(uri);

mongoose
    .connect(uri, {useNewUrlParser: true})
    .then(res => {
        app.listen(PORT || 3000)
    }).catch(err => console.log('connection failed => ', err));
