const path        = require('path');
const fs          = require('fs');
const mongoose    = require('mongoose');
const express     = require('express');
const bodyParser  = require('body-parser');
const cors        = require('cors');
const morgan      = require('morgan');
const helmet      = require('helmet');
const router      = require('./routes');
const app         = express();

const accessLogStream = fs.createWriteStream(
    path.join(__dirname, 'access.log'),
    {flags: 'a'});

app.use(morgan('dev', {stream: accessLogStream}));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());

router.init(app);

const {HOSTNAME, DB_USER, DB_PASSWORD, PORT} = process.env;
const uri                                    = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${HOSTNAME}?retryWrites=true`;

mongoose
    .connect(uri, {useNewUrlParser: true})
    .then(_ => {
        const server = app.listen(PORT || 3000);
        const io     = require('./socket').init(server);
        io.on('connection', socket => {
            console.log('Client connected');
        })
    })
    .catch(err => console.log('connection failed => ', err));