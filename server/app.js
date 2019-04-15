const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

const { HOSTNAME, USERNAME, PASSWORD } = process.env;
const uri = `mongodb+srv://${USERNAME}:${PASSWORD}@${HOSTNAME}?retryWrites=true`;

mongoose
    .connect(uri, {useNewUrlParser: true})
    .then(res => {
        app.listen(process.env.PORT || 3000)
    }).catch(err => console.log('connection failed => ', err));
