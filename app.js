const path        = require('path');
const fs          = require('fs');
const express     = require('express');
const bodyParser  = require('body-parser');
// const cors        = require('cors');
const morgan      = require('morgan');
const helmet      = require('helmet');
const router      = require('./routes');
const app         = express();

const accessLogStream = fs.createWriteStream(
    path.join(__dirname, 'access.log'),
    {flags: 'a'});

// app.use(cors());
app.use(morgan('dev', {stream: accessLogStream}));
app.use(bodyParser.json());
app.use(helmet());

router.init(app);

module.exports = app;
